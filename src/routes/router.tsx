import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home/homePage";
import { ProcessosPage } from "../pages/processos/ProcessosPage";
import RedirectComponent from "../components/Redirect";
import { ComponentesPage } from "../pages/componentes/ComponentesPage";

export const AppRouter: React.FC = () => {
    return (
      <HashRouter >
        <Routes>
          <Route path="/" element={<RedirectComponent />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/processos" element={<ProcessosPage />} />
          <Route path="/componentes" element={<ComponentesPage />} />
        </Routes>
      </HashRouter>
    );
  };