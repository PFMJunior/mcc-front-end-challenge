import { useState } from "react";
import styles from "./styles.module.scss";
import { ModalListUser } from "../ModalListUser";
import { ListUsers, UserProsp } from "../../@types/interfaces";
import { publishedDateFormatted } from "../../hooks/formatedDate";

export function ListUser({ listUsers }: UserProsp) {
    const [ openModal, setOpenModal ] = useState<boolean>(false);
    const [ modalUser, setModalUser ] = useState<ListUsers | undefined>();

    return(
        <>
            <div className={styles.users}>
                {listUsers && listUsers.map((user) => (
                    <div className={styles.user}>
                        <div className={styles.informationsUser} key={user.id.value}>
                            <img src={user.picture.medium} alt="" />
                            <p><strong>Nome: </strong>{user.name.first}</p>
                            <p><strong>E-mail: </strong>{user.email}</p>
                            <p><strong>Nome de Usúario: </strong>{user.login.username}</p>
                            <p><strong>Data de Nascimento: </strong>{publishedDateFormatted(user.dob.date)}</p>
                        </div>
                        <button onClick={() => { setOpenModal(true); setModalUser(user)}}>Saiba Mais</button>
                    </div>
                ))}
            </div>

            {openModal &&
                <ModalListUser close={setOpenModal} item={modalUser} />
            }
        </>
    );
}