import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home/homePage";
import { ProcessosPage } from "../pages/processos/ProcessosPage";

export const AppRouter: React.FC = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/docsamdev" element={<HomePage />} />
          <Route path="/docsamdev/processos" element={<ProcessosPage />} />
        </Routes>
      </BrowserRouter>
    );
  };