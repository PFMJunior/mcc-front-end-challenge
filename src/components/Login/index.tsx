import toast from "react-hot-toast";
import styles from "./styles.module.scss";
import { fetchData } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { LoginProps } from "../../@types/interfaces";
import { FormEvent, useEffect, useState } from "react";

export function Login() {
    const navigate                              = useNavigate();
    const [users, setUsers]                     = useState<LoginProps[]>([]);
    const [username, setUsername]               = useState('');
    const [password, setPassword]               = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await fetchData();
                setUsers(data);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        };
        fetchUsers();
    }, []);
    console.log("users", users)

    const handleLogin = (event: FormEvent) => {
        event.preventDefault();
        const user = users.find((user: { email: string; }) => user.email === username || username === 'teste@minhacasaconstruida.com.br');
        if (user && password === user.login.password || password === 'casaconstruida') {
            toast.success('Login efetuado com sucesso!')
            navigate("/lista-de-usuarios")
        } else {
            toast.error("Nome de usuário ou senha incorretos.");
        }
    };

    return(
        <div className={styles.login}>
            <h1>Login</h1>
            <h4>Entrar com email e senha</h4>

            <form onSubmit={handleLogin}>
                <div className={styles.input}>
                    <label>Seu e-mail</label>
                    <input
                        type="email"
                        placeholder="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}    
                    />
                </div>
                
                <div className={styles.input}>
                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder="senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <a href="/cadastro">
                    <span>Cadastra-se agora</span>
                </a>
                <button onClick={handleLogin}>Entrar</button>
            </form>
        </div>
    );
}