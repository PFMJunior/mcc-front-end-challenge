import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import { ListUser } from "../../components/ListUser";

export function UsersList() {
    const [data, setData]       = useState([]);
    const [error, setError]     = useState<string | null | unknown>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchData();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);
    console.log("data", data)

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error.message}</p>;

    return(
        <div className={styles.listUsers}>
            <h1>Lista de Usúarios</h1>
            <ListUser data={data} />
        </div>
    );
}