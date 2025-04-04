import { useEffect } from "react";
import { CodeTabs } from "../../components/CodeTabs";
import { DataTable } from "../../components/DataTable";
import { Layout } from "../../components/Layout"
import { Nota } from "../../components/Nota";
import { useLocation } from "react-router-dom";

export const ComponentesPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" }); // ou behavior: "auto"
            }
        }
    }, [location]);

    const indices = [
        { id: "/componentes#componentes", label: "Componentes" },
        { id: "/componentes#atributosdefault", label: "Atributos Default" },
        { id: "/componentes#minput", label: "m-input" },
        { id: "/componentes#atributosdefault", label: "Atributos Default" },
        { id: "/componentes#atributosdefault", label: "Atributos Default" },
    ]

    const codeTabsData = [
        {
            label: "Exemplo",
            code: `def decimal = 12.8867899
def duasCasas = trunc(decimal, 3) def duasCasas = trunc(decimal, 3)`,
            language: "groovy",
        },
        {
            label: "Retorno",
            code: `12.886`,
            language: "plaintext",
        },
    ];

    const headers = ["Nome", "Descrição", "Valores Permitidos", "Valor Default"];
    const data = [
        ["label", "Label para o campo", "*", "-"],
        ["help", "Texto de ajuda para o campo", "*", "-"],
        ["id", "ID do campo", "*", "-"],
        ["wrapperClass", "Classe (css) para a DIV wrapper do input", "*", "-"],
        ["showWrapper", "Indica se a DIV wrapper do componente será exibida", "*", "-"],
        ["required", "Indica se esse campo é requerido", "true, false", "false"],
        ["v-model", "Nome do componente, utilizado para obter seu valor", "*", "-"],
    ];
    return (
        <Layout indice={indices}>
            <div id="componentes">
                <h1 className="text-zinc-400 text-4xl mb-5">Componentes</h1>
                <p className="p-1 mt-5">
                    Componentes de Software é o termo utilizado para descrever o elemento de software que encapsula uma série de funcionalidades.
                    Os componentes abaixo listados foram desenvolvidos pela Multitec para uso exclusivo no SAM.
                </p>
                <p className="p-1 mt-5">
                    Estes componentes são baseados na sintaxe das tags HTML, são construidos a partir do framework VUE.js e podem ser utilizados para
                    a criação de filtros que são utilizados nos processos de Extração de Dados.
                </p>
            </div>

            <div id="atributosdefault" className="mt-10">
                <h1 className="text-3xl border-b border-zinc-500 p-2">Atributos Default</h1>
                <p className="p-1 my-5">
                    Assim como nas tags do HTML os componentes Multitec também possuem seus atributos. Todos os componentes 
                    por default possuem os seguintes atributos para a sua configuração.
                </p>
                <DataTable headers={headers} data={data} />
            </div>

            <div id="minput" className="mt-10">
                <h1 className="text-3xl border-b border-zinc-500 p-2">m-input</h1>
                <p className="p-1 my-5">
                    Este componente renderiza um campo input para textos, com os seguintes atributos:
                </p>
                <DataTable headers={headers} data={[["type","Tipo do conteúdo aceito","text, integer, decimal, monthYear", "-"]]} />
            </div>
        </Layout>
    )
}