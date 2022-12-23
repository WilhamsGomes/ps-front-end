import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

export default function SelectContas(props){

    const [contas, setContas] = useState([])

    useEffect( () => {
        fetch("http://localhost:8080/users")
            .then((response) => {
                return response.json()
            }).then((data) =>  {
                setContas(data)
            })
            .catch((error) => {
                console.log("erro", error)
            })
    }, [])

    return (
        <div className={styles.selectContas}>
            <label>Por favor, selecione a conta para gerar o extrato</label>
            <select
                onChange={props.onChange}
            >
                <option>Selecione uma opção</option>
                {contas.map((conta) => (
                    <option 
                        value={conta.id_conta} 
                        key={conta.id_conta}
                    > 
                    {conta.id_conta} - {conta.nome_responsavel}
                    </option>
                ))}
            </select>
        </div>
    )
}