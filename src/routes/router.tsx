import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home/homePage";

export const AppRouter: React.FC = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/docsamdev" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    );
  };