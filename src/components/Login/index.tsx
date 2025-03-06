import styles from "./styles.module.scss";

export function Login() {
    return(
        <div className={styles.login}>
            <h1>Entrar</h1>
            <h4>Entrar com email e senha</h4>

            <form>
                <div className={styles.input}>
                    <label>Seu e-mail</label>
                    <input type="email" placeholder="email" />
                </div>
                
                <div className={styles.input}>
                    <label>Senha</label>
                    <input type="password" placeholder="senha" />
                </div>

                <a href="/cadastro">
                    <span>Cadastra-se agora</span>
                </a>
                <button>Entrar</button>
            </form>
        </div>
    );
}