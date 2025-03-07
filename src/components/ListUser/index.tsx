import styles from "./styles.module.scss";
import { UserProsp } from "../../@types/interfaces";
import { publishedDateFormatted } from "../../hooks/formatedDate";

export function ListUser({ data }: UserProsp) {
    return(
        <div className={styles.users}>
            {data && data.map((user) => (
                <div className={styles.user}>
                    <div className={styles.informationsUser} key={user.id.value}>
                        <img src={user.picture.medium} alt="" />
                        <p><strong>Nome: </strong>{user.name.first}</p>
                        <p><strong>E-mail: </strong>{user.email}</p>
                        <p><strong>Nome de Usúario: </strong>{user.login.username}</p>
                        <p><strong>Data de Nascimento: </strong>{publishedDateFormatted(user.dob.date)}</p>
                    </div>
                    <button>Saiba Mais</button>
                </div>
            ))}
        </div>
    );
}