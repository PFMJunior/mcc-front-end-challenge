import styles from "./styles.module.scss";

export function UsersList() {
    return(
        <div className={styles.listUsers}>
            <h1>Lista de Usúarios</h1>
            <div className={styles.users}>
                {Array.from({ length: 18 }).map((index: any) => (
                    <div className={styles.user} key={index}>
                        <div className={styles.informationsUser}>
                            <p><strong>Nome: </strong>Paulo Montefusco</p>
                            <p><strong>E-mail: </strong>paulomontefusco.junior@gmail.com</p>
                            <p><strong>Celular: </strong>(11) 97100-6883</p>
                            <p><strong>Data de Nascimento: </strong>08/01/1998</p>
                        </div>
                        <button>Editar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}