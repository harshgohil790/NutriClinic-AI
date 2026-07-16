function TextArea({

    label,

    name,

    value,

    onChange,

    rows = 4,

}) {

    return (

        <div className="mb-5">

            <label className="block mb-2 font-medium">

                {label}

            </label>

            <textarea

                rows={rows}

                name={name}

                value={value}

                onChange={onChange}

                className="w-full border rounded-xl p-3"

            />

        </div>

    );

}

export default TextArea;