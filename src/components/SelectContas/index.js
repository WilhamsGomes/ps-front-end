import styles from "./style.module.css";

export default function SelectContas(){

    const arrayContas = [
        {id: 1, nameResponsavel: "Wilhams"},
        {id: 2, nameResponsavel: "Hugo"},
        {id: 3, nameResponsavel: "Zuleide"}
    ]

    return (
        <div className={styles.selectContas}>
            <label>Por favor, selecione a conta para gerar o extrato</label>
            <select>
                {arrayContas.map((conta) => (
                    <option value={conta.id} key={conta.id}>{conta.id} - {conta.nameResponsavel}</option>
                ))}
            </select>
        </div>
    )
}