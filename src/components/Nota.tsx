import { Info, Pencil, Notebook } from "lucide-react"
import { ReactNode } from "react"

interface INota {
    titulo: string,
    children: string | ReactNode,
    icon: "info" | "pencil" | "note"
}
export const Nota = ({ titulo, children, icon }: INota) => {
    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg border-l-4 border-cyan-400 flex items-start mt-5">
            {icon == "info" && <Info className="text-cyan-400 mr-2 mt-1" size={20} />}
            {icon == "pencil" && <Pencil className="text-cyan-400 mr-2 mt-1" size={20} />}
            {icon == "note" && <Notebook className="text-cyan-400 mr-2 mt-1" size={20} />}
            <div>
                <p className="font-semibold">{titulo}</p>
                <p className="text-gray-300">
                    {children}
                </p>
            </div>
        </div>
    )
}