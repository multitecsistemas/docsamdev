import { Layout } from "../../components/Layout"
import { Info } from "lucide-react";

export const HomePage = () => {
    const indices = [
        { id: "bemvindo", label: "Bem vindo" },
        { id: "introducao", label: "Introdução" },
        { id: "recomendacoes", label: "Recomendações" },
        { id: "linguagem", label: "Linguagens Utilizadas" },
        { id: "comofunciona", label: "Como Funciona" },
        { id: "requisitos", label: "Requisitos" },
        { id: "bemvindo", label: "Bem vindo" },
        { id: "introducao", label: "Introdução" },
        { id: "recomendacoes", label: "Recomendações" },
        { id: "linguagem", label: "Linguagens Utilizadas" },
        { id: "comofunciona", label: "Como Funciona" },
        { id: "requisitos", label: "Requisitos" },
        { id: "bemvindo", label: "Bem vindo" },
        { id: "introducao", label: "Introdução" },
        { id: "recomendacoes", label: "Recomendações" },
        { id: "linguagem", label: "Linguagens Utilizadas" },
        { id: "comofunciona", label: "Como Funciona" },
        { id: "requisitos", label: "Requisitos" },
        { id: "bemvindo", label: "Bem vindo" },
        { id: "introducao", label: "Introdução" },
        { id: "recomendacoes", label: "Recomendações" },
        { id: "linguagem", label: "Linguagens Utilizadas" },
        { id: "comofunciona", label: "Como Funciona" },
        { id: "requisitos", label: "Requisitos" },
        { id: "bemvindo", label: "Bem vindo" },
        { id: "introducao", label: "Introdução" },
        { id: "recomendacoes", label: "Recomendações" },
        { id: "linguagem", label: "Linguagens Utilizadas" },
        { id: "comofunciona", label: "Como Funciona" },
        { id: "requisitos", label: "Requisitos" },
        { id: "bemvindo", label: "Bem vindo" },
        { id: "introducao", label: "Introdução" },
        { id: "recomendacoes", label: "Recomendações" },
        { id: "linguagem", label: "Linguagens Utilizadas" },
        { id: "comofunciona", label: "Como Funciona" },
        { id: "requisitos", label: "Requisitos ulti" },
    ]
    return (
        <Layout indice={indices}>
            <div id="bemvindo">
                <h1 className="text-zinc-400 text-4xl mb-5">Bem vindo</h1>
                <p>Bem vindo à documentação para desenvolvedores do ERP SAM.</p>
                <div className="bg-gray-800 text-white p-4 rounded-lg border-l-4 border-cyan-400 flex items-start mt-5">
                    <Info className="text-cyan-400 mr-2 mt-1" size={20} />
                    <div>
                        <p className="font-semibold">Saiba Mais</p>
                        <p className="text-gray-300">
                            Para conhecer mais, visite o site oficial do
                            <a href="https://multitecsistemas.com.br" target="_blank" className="text-cyan-400 hover:underline"> SAM</a>.
                        </p>
                    </div>
                </div>
            </div>

            <div id="introducao" className="mt-10">
                <h1 className="text-3xl border-b border-zinc-500 p-2">Introdução</h1>
                <p className="p-1 mt-5">
                    Este documento tem como finalidade apresentar as diferentes formas de cutomização de processos e integração com os recursos e
                    funcionalidades do ERP SAM, por exemplo, ao inserir um registro no sistema há a posiblidade de inferir neste processo realizando críticas/retrições.
                    O SAM é um sistema totalmente adaptável e pode se enquadrar perfeitamente às regras do seu négocio, além de se integrar perfeitamente a outros sistemas
                    atuais do mercado. Aqui veremos como realizar estas customizações de processos e integrações.
                </p>
            </div>

            <div id="recomendacoes" className="mt-10">
                <h1 className="text-3xl border-b border-zinc-500 p-2">Recomendações</h1>
                <p className="p-1 my-5">
                    O SAM utiliza como parte de seus componentes algumas bibliotecas e frameworks, antes de começar recomendamos que você leia e entenda um pouco mais sobre elas.
                </p>
                <ul className="list-disc list-inside text-blue-400 space-y-1 px-5">
                    <li><a target="_blank" href="https://br.vuejs.org/v2/guide/index.html" className="cursor-pointer">VUE.js</a></li>
                    <li><a target="_blank" href="https://apexcharts.com" className="cursor-pointer">ApexCharts</a></li>
                    <li><a target="_blank" href="https://quasar.dev" className="cursor-pointer">Quasar</a></li>
                    <li><a target="_blank" href="https://docs.oracle.com/javase/tutorial/uiswing/start/about.html" className="cursor-pointer">Swing</a></li>
                </ul>
            </div>

            <div id="linguagem" className="mt-10">
                <h1 className="text-3xl border-b border-zinc-500 p-2">Linguagens Utilizadas</h1>
                <p className="p-1 my-5">
                    As customizações e integrações com o SAM são contruidas a partir da linguagem Groovy. O Groovy é uma linguagem de programação orientada a objetos
                    desenvolvida para a plataforma Java como alternativa à linguagem de programação Java. Ele possui características de Python, Ruby e Smalltalk.
                    Utiliza uma sintaxe similar à de Java, é compilada dinamicamente para bytecode Java e integra-se transparentemente com outros códigos e bibliotecas Java.
                </p>
                <div className="bg-gray-800 text-white p-4 rounded-lg border-l-4 border-cyan-400 flex items-start mt-5">
                    <Info className="text-cyan-400 mr-2 mt-1" size={20} />
                    <div>
                        <p className="font-semibold">Visite a documentação do <a target="_blank" href="https://groovy-lang.org/documentation.html" className="text-blue-500 cursor-pointer">Groovy</a>.</p>
                    </div>
                </div>
                <p className="p-1 my-5">
                    Os componentes gráficos renderizados na web são construidos com HTML, CSS e JavaScript, podendo ou não utilizar os componentes dos frameworks que vimos a
                    cima. Já os componentes gráficos rederizados em desktop são construidos com Swing.
                </p>
            </div>

            <div id="comofunciona" className="mt-10">
                <h1 className="text-3xl border-b border-zinc-500 p-2">Como Funciona</h1>
                <p className="p-1 my-5">
                    Todas as customizações e integrações podem ser construidas a partir do próprio SAM, nele você encontrará uma ferramenta já integrada e pronta para uso
                    chamada SAMDEV, porém, também podemos criá-las a partir de qualquer outro editor de textos, editor de códigos ou IDE de sua preferencia.
                </p>
                <p className="p-1 ">
                    Além do SAMDEV disponibilizamos dois projetos já integrados com as IDEs Eclipse e IntelliJ.
                </p>
            </div>

            <div id="requisitos" className="mt-10">
                <h1 className="text-3xl border-b border-zinc-500 p-2">Requisitos</h1>
                <p className="p-1 my-5">
                    Para instalar do SAM e utilizar do SAMDEV ou outros Editores/IDEs, devemos instalar os seguintes requisitos:
                </p>
                <ul className="list-disc list-inside text-blue-400 space-y-1 px-5">
                    <li><a target="_blank" href="https://www.oracle.com/br/java/technologies/downloads/#jdk21-windows" className="cursor-pointer">Java 21</a></li>
                    <li><a target="_blank" href="https://www.postgresql.org/download/" className="cursor-pointer">PostgreSQL</a></li>
                </ul>
            </div>
        </Layout>
    )
}