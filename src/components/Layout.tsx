import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Layout = ({ children, indice }: { children: React.ReactNode, indice: { id: string, label: string }[] }) => {
    const navigate = useNavigate()

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isIndexOpen, setIndexOpen] = useState(false);

    return (
        <div className="flex flex-col h-screen bg-[#2E303E]">
            {/* Navbar fixa no topo */}
            <nav className="bg-blue-900 w-full h-13 text-white flex justify-between px-5 items-center shadow-2xl fixed top-0 left-0 right-0 z-50">
                <div className="flex items-center gap-3">
                    <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!isMenuOpen)}>☰</button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
                        <path fill="white" d="M12 8a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3m0 3.54C9.64 9.35 6.5 8 3 8v11c3.5 0 6.64 1.35 9 3.54 2.36-2.19 5.5-3.54 9-3.54V8c-3.5 0-6.64 1.35-9 3.54z" />
                    </svg>
                    <span className="font-bold text-2xl">SAM4Devs</span>
                </div>
                <div className="flex items-center gap-4">

                    <button className="md:hidden text-white text-2xl" onClick={() => setIndexOpen(!isIndexOpen)}>☰</button>
                </div>
            </nav>

            {/* Corpo do layout */}
            <div className="flex flex-1 mt-13">
                {/* Menu lateral esquerdo */}
                <aside className={`bg-[#2E303E] text-white p-5 fixed h-[calc(100vh-3.25rem)] mb-10 left-0 top-14 transition-transform duration-300 md:translate-x-0 ${isMenuOpen ? "translate-x-0" : "-translate-x-64"}`}>
                    <h2 className="font-bold text-lg mb-4">SAM4Devs</h2>
                    <ul>
                        <li className="py-2 cursor-pointer"><a onClick={()=>navigate("/home")} className="hover:text-blue-400">Comece Aqui</a></li>
                        <li className="py-2 cursor-pointer"><a onClick={()=>navigate("/processos")} className="hover:text-blue-400">Tipos de Processos</a></li>
                        <li className="py-2 cursor-pointer"><a onClick={()=>navigate("/componentes")} className="hover:text-blue-400">Componentes</a></li>
                        <li className="py-2 cursor-pointer"><a onClick={()=>navigate("/metodos")} className="hover:text-blue-400">Métodos</a></li>
                    </ul>
                </aside>

                {/* Conteúdo principal */}
                <main className="flex-1 py-8 px-4 transition-all duration-300 md:ml-64 md:mr-64 h-[calc(100vh-3.25rem)] overflow-auto text-white ">
                    {children}
                </main>

                {/* Índice lateral direito */}
                <aside className={`bg-[#2E303E] text-white p-5 overflow-auto fixed right-0 h-[calc(100vh-3.25rem)] top-14 transition-transform duration-300 md:translate-x-0 ${isIndexOpen ? "translate-x-0" : "translate-x-64"}`}>
                    <h2 className="font-bold text-lg mb-4">Índice</h2>
                    <ul className="mb-10">
                        {
                            indice.map((ind) => <li className="py-2"><Link to={`${ind.id}`} className="hover:text-blue-400">{ind.label}</Link></li>)
                        }
                    </ul>
                </aside>
            </div>
        </div>
    );
};
