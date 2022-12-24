import React, { useEffect, useState, useContext } from "react";
import styles from "./style.module.css";
import { ThemeContext } from "../Theme/useThemeContext"; 

export default function SelectContas(props){

    const [contas, setContas] = useState([])
    const {theme} = useContext(ThemeContext)

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
        <div 
            className={styles.selectContas}
            style={{
                color: theme === 'dark' ? '#ECF1F3' : '#222222'
            }}
        >
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