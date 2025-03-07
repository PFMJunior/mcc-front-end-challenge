import styles from "./styles.module.scss";
import { ItemModal } from "../../@types/interfaces";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { publishedDateFormatted } from "../../hooks/formatedDate";

interface ModalProps {
    close: (value: boolean) => void;
    item : ItemModal
}

export function ModalListUser({ close, item }: ModalProps) {
    // console.log(item)
    return(
        <div className={styles.modalListUser} onClick={() => close(false)}>
            <div className={styles.container} onClick={(e) => e.stopPropagation()}>
                <div className={styles.top}>
                    <AiOutlineCloseCircle
                        onClick={() => close(false)}
                    />
                </div>

                <div className={styles.contentModal}>
                    <img src={item.picture.large} alt="" />

                    <div className={styles.informationsUser}>
                        <p><strong>Nome: </strong>{item.name.first}</p>
                        <p><strong>Sobrenome: </strong>{item.name.last}</p>
                        <p><strong>E-mail: </strong>{item.email}</p>
                        <p><strong>Idade: </strong>{item.dob.age} anos</p>
                        <p><strong>Data de Nascimento: </strong>{publishedDateFormatted(item.dob.date)}</p>
                        <p><strong>Rua</strong> {item.location.street.name} <strong>Número</strong> {item.location.street.number}</p>
                        <p><strong>Cidade</strong> {item.location.city}</p>
                        <p><strong>Estado</strong> {item.location.state}</p>
                        <p><strong>País</strong> {item.location.country}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}