import styles from "./styles.module.scss";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { NewUserProps } from "../../@types/interfaces";
import { ErrorMessage } from "../../components/ErrorMessage";

export function Register() {
    const navigate          = useNavigate();
    const [users, setUsers] = useState<NewUserProps[]>([]);
    const
    {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<NewUserProps>();

    useEffect(() => {
        const fetchAndStoreData = async () => {
        const apiData = await fetchData();
        const storedData = JSON.parse(localStorage.getItem('users') || '[]');
            setUsers([...storedData, ...apiData]);
        };
        fetchAndStoreData();
    }, []);
    
    const onSubmit = (data: NewUserProps) => {
        const updatedUsers = [...users, data];
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        toast.success('Cadastro efetuado com Sucesso!');
        reset(); // Limpa o formulário
        navigate('/lista-de-usuarios');
    };

    return(
        <div className={styles.register}>
            <h1>Cadastrar</h1>
            <h4>Seja bem vindo</h4>

            <form>
                <div className={styles.top}>
                    <div className={styles.input}>
                        <label>Seu Nome</label>
                        <input
                            type="text"
                            placeholder="Nome"
                            {...register('name.first', { required: "Este campo é obrigatório!" })}
                        />
                        {errors.name?.first && <ErrorMessage message={errors.name?.first.message} />}
                    </div>
                    <div className={styles.input}>
                        <label>Seu Sobrenom</label>
                        <input
                            type="text"
                            placeholder="Sobrenome"
                            {...register('name.last', { required: "Este campo é obrigatório!" })}
                        />
                        {errors.name?.last && <ErrorMessage message={errors.name?.last.message} />}
                    </div>
                </div>

                <div className={styles.input}>
                    <label>Seu e-mail</label>
                    <input
                        type="email"
                        placeholder="email"
                        {...register('email',
                            {
                                required: "Este campo é obrigatório!",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Email inválido",
                                },
                            })
                        }
                    />
                    {errors.email && <ErrorMessage message={errors.email.message} />}
                </div>
                
                <div className={styles.input}>
                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder="senha"
                        {...register('login.password', { required: "Este campo é obrigatório!" })}
                    />
                    {errors.login?.password && <ErrorMessage message={errors.login?.password.message} />}
                </div>

                <a href="/">
                    <span>Voltar</span>
                </a>
                <button onClick={handleSubmit(onSubmit)}>Cadastrar</button>
            </form>
        </div>
    );
}