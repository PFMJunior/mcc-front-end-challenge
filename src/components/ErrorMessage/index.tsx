import styles from "./styles.module.scss";
import { AiOutlineExclamationCircle } from "react-icons/ai";

interface MessageProps {
    message: string | undefined
}

export function ErrorMessage({ message }: MessageProps) 
{
    return (
        <div className={styles.errorMessage}>
            <AiOutlineExclamationCircle />
            {message} 
        </div>
    );
}