function Select({

    label,

    name,

    value,

    onChange,

    options,

}) {

    return (

        <div className="mb-5">

            <label className="block mb-2 font-medium">

                {label}

            </label>

            <select

                name={name}

                value={value}

                onChange={onChange}

                className="w-full border rounded-xl p-3"

            >

                {

                    options.map((item)=>(

                        <option

                            key={item}

                            value={item}

                        >

                            {item}

                        </option>

                    ))

                }

            </select>

        </div>

    );

}

export default Select;