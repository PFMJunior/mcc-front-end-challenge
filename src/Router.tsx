import { Route } from "react-router";
import { HomePage } from "./pages/Home";
import { Routes } from "react-router-dom";
import { Register } from "./pages/Cadastro";
export function Router() {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cadastro" element={<Register />} />
        </Routes>
    );
}