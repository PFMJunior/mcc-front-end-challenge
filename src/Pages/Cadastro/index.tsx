import styles from "./styles.module.scss";

export function Register() {
    return(
        <div className={styles.register}>
            <h1>Cadastrar</h1>
            <h4>Seja bem vindo</h4>

            <form>
                <div className={styles.top}>
                    <div className={styles.input}>
                        <label>Seu Nome</label>
                        <input type="text" placeholder="Nome" />
                    </div>
                    <div className={styles.input}>
                        <label>Seu Sobrenom</label>
                        <input type="text" placeholder="Sobrenome" />
                    </div>
                </div>

                <div className={styles.input}>
                    <label>Seu e-mail</label>
                    <input type="email" placeholder="email" />
                </div>
                
                <div className={styles.input}>
                    <label>Senha</label>
                    <input type="password" placeholder="senha" />
                </div>

                <a href="/">
                    <span>Voltar</span>
                </a>
                <button>Cadastrar</button>
            </form>
        </div>
    );
}