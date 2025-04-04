import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home/homePage";
import { ProcessosPage } from "../pages/processos/ProcessosPage";
import RedirectComponent from "../components/Redirect";

export const AppRouter: React.FC = () => {
    return (
      <HashRouter >
        <Routes>
          <Route path="/" element={<RedirectComponent />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/processos" element={<ProcessosPage />} />
        </Routes>
      </HashRouter>
    );
  };