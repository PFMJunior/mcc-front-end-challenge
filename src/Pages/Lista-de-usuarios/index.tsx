import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import { ListUser } from "../../components/ListUser";

interface ErrorProps {
    message : string
}

export function UsersList() {
    const [data, setData]       = useState([]);
    const [error, setError]     = useState<ErrorProps | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchData();
                setData(result);
            } catch (error) {
                // setError(err);
                if (error instanceof Error) {
                    setError({ message: error.message });
                } else if (typeof error === 'string') {
                    setError({ message: error });
                } else {
                    setError({ message: 'Ocorreu um erro desconhecido.' });
                }
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);
    console.log("data", data)

    if (loading) return <p className={styles.loading}>Carregando...</p>;
    if (error) return <p>Erro: {error.message}</p>;

    return(
        <div className={styles.listUsers}>
            <h1>Lista de Usúarios</h1>
            <ListUser listUsers={data} />
        </div>
    );
}