interface TableProps {
    headers: string[];
    data: (string | number)[][];
}

export const DataTable: React.FC<TableProps> = ({ headers, data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border border-gray-600 text-left text-white">
                {/* Cabeçalhos da tabela */}
                <thead className="bg-gray-800">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="px-4 py-2 border border-gray-600">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* Dados da tabela */}
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border border-gray-600">
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="px-4 py-2 border border-gray-600">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};  