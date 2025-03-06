import { Route } from "react-router";
import { HomePage } from "./pages/Home";
import { Routes } from "react-router-dom";
import { Register } from "./pages/Cadastro";
import { UsersList } from "./pages/Lista-de-usuarios";
export function Router() {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/lista-de-usuarios" element={<UsersList />} />
        </Routes>
    );
}