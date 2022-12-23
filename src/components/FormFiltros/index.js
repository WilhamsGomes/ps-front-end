import styles from "./style.module.css";

import InputForm from "../InputForm/index";
import Button from "../ButtonForm/index";
import TableExtrato from "../TableExtrato";

export default function FormFiltros(){

    const typesInputs = [
        {type: "date", placeholder: "", label: "Data de início"},
        {type: "date", placeholder: "", label: "Data de Fim"},
        {type: "text", placeholder: "Operador transacionado", label: "Nome operador transacionado"},
    ]

    const titleExtrato = [
        {title: "Dados"},
        {title: "Valentia"},
        {title: "Tipo"},
        {title: "Nome operador transacionado"}
    ]

    function handleExtrato(){
        alert("Pesquisar")
    }

    return (
        <div className={styles.form}>
            <div className={styles.inputsFiltros}> 
                {typesInputs.map((input) => (
                    <InputForm
                        key={input.label}
                        type={input.type}
                        placeholder={input.placeholder}
                        label={input.label}
                    />
                ))}   
            </div>

            <Button 
                onClick={handleExtrato}
            >
                Pesquisar
            </Button>   

            <TableExtrato>
                    <thead>
                        <tr>
                            <th colspan="2"> Saldo total: R$ 50,00 </th>
                            <th colspan="2">Saldo no período R$50,00</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            {titleExtrato.map( (titulo) => (
                                <th  
                                    key={titulo.title}
                                >
                                {titulo.title}
                                </th>
                            ))}
                        </tr>
                    </tbody>
                    
                    <tbody>
                        <tr>
                            <td>14/02/2019</td>
                            <td>R$ 1234,00</td>
                            <td>Depósito</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>14/02/2019</td>
                            <td>R$ 1234,00</td>
                            <td>Depósito</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>14/02/2019</td>
                            <td>R$ 1234,00</td>
                            <td>Depósito</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>14/02/2019</td>
                            <td>R$ 1234,00</td>
                            <td>Depósito</td>
                            <td> </td>
                        </tr>
                    </tbody>
                    
            </TableExtrato>
        </div>
    )
}