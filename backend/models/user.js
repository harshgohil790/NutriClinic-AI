const { Schema, model } = require("mongoose");
const crypto = require("crypto");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    salt: {
      type: String,
    },

    role: {
      type: String,
      enum: ["DIETITIAN", "PATIENT", "ADMIN"],
      default: "PATIENT",
    },

    profileImage: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function () {

    if (!this.isModified("password")) return;

    const salt = crypto.randomBytes(16).toString("hex");

    this.password = crypto
        .createHmac("sha256", salt)
        .update(this.password)
        .digest("hex");

    this.salt = salt;
});

userSchema.methods.comparePassword = function (password) {

    const generatedHash = crypto
        .createHmac("sha256", this.salt)
        .update(password)
        .digest("hex");


    return generatedHash === this.password;
};

module.exports = model("User", userSchema);