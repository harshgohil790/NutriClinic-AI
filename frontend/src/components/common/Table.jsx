function Table({

    columns,

    children,

}) {

    return (

        <table className="w-full bg-white rounded-xl overflow-hidden">

            <thead>

                <tr className="bg-green-600 text-white">

                    {

                        columns.map((col)=>(

                            <th

                                key={col}

                                className="p-4 text-left"

                            >

                                {col}

                            </th>

                        ))

                    }

                </tr>

            </thead>

            <tbody>

                {children}

            </tbody>

        </table>

    );

}

export default Table;