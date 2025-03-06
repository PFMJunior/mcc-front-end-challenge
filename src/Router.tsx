import { Route } from "react-router";
import { HomePage } from "./Pages/Home";
import { Routes } from "react-router-dom";
import { Register } from "./Pages/Cadastro";
export function Router() {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cadastro" element={<Register />} />
        </Routes>
    );
}