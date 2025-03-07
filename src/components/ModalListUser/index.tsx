import styles from "./styles.module.scss";
import { UserProsp } from "../../@types/interfaces";
import { AiOutlineCloseCircle } from "react-icons/ai";

export function ModalListUser({ close, item }: UserProsp) {
    console.log(item)
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
                        
                    </div>
                </div>
            </div>
        </div>
    );
}