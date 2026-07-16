function Input({

    label,

    name,

    value,

    onChange,

    type = "text",

    placeholder = "",

}) {

    return (

        <div className="mb-5">

            <label className="block mb-2 font-medium">

                {label}

            </label>

            <input

                type={type}

                name={name}

                value={value}

                onChange={onChange}

                placeholder={placeholder}

                className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"

            />

        </div>

    );

}

export default Input;