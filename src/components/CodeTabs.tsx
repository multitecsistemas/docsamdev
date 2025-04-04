import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface TabData {
  label: string;
  code: string;
  language: string;
}

interface CodeTabsProps {
  tabs: TabData[];
}

export const CodeTabs: React.FC<CodeTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-auto w-full">
      {/* Abas */}
      <div className="flex border-b border-gray-600">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm cursor-pointer ${
              activeTab === index ? "border-b-2 border-blue-500 text-white" : "text-gray-400"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Código formatado */}
      <div className="bg-gray-900 p-4 rounded-md mt-2 w-full">
        <SyntaxHighlighter language={tabs[activeTab].language} style={dracula}>
          {tabs[activeTab].code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};