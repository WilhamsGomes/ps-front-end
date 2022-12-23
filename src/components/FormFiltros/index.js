import React, { useState, useMemo, useContext } from 'react';

import styles from "./style.module.css";
import "./style.css";

import InputForm from "../InputForm/index";
import Button from "../ButtonForm/index";
import TableExtrato from "../TableExtrato";
import SelectContas from "../SelectContas";
import Pagination from '../PaginationTable/Pagination';

import data from './data/mock-data.json';

import { MyContext } from '../Context/useContext';


let PageSize = 10;

export default function FormFiltros(){

    const conta = useContext(MyContext);

    const titleExtrato = [
        {title: "Dados"},
        {title: "Valentia"},
        {title: "Tipo"},
        {title: "Nome operador transacionado"}
    ]

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {

      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return data.slice(firstPageIndex, lastPageIndex);
      
    }, [currentPage]);
   
    const [operador, setOperador] = useState("");
    const [dataInicial, setDataInicial] = useState("");
    const [dataFinal, setDataFinal] = useState("");

    function handleFiltros(){

        if((dataInicial && dataFinal !== "") || (dataInicial && dataInicial == null)){
            if(dataInicial < dataFinal){
                if (conta.idConta > 0 && conta.idConta != null){
                    handleExtrato(dataInicial, dataFinal, operador, conta.idConta)
                } else {
                    alert("Informe uma conta desejada")
                }
            } else {
                alert("Data final precisa ser maior que a inicial")
            }
        } else {
            alert("Determine um período do extrato com data inicial e final")
        }
        
    }

    function handleExtrato(dataInicial, dataFinal, operador, contaId){
        console.log("Pesquisa liberada")
        console.log("Nome do operador: ", operador)
        console.log("Data inicial: ", dataInicial)
        console.log("Data final: ", dataFinal)
        console.log("Data final: ", contaId)
    }


    return (
        <div className={styles.form}>

            <SelectContas
                onChange={(event) => event.target.value > 0 ? conta.setIdConta(event.target.value) : conta.setIdConta(null)}
            />
            {conta.idConta}

            <div className={styles.inputsFiltros}> 
                <InputForm
                    type="date"
                    label="Data de início"
                    value={dataInicial}
                    onChange={(event) => setDataInicial(event.target.value)}
                />  
                <InputForm
                    type="date"
                    label="Data de Fim"
                    value={dataFinal}
                    onChange={(event) => setDataFinal(event.target.value)}
                />  
                <InputForm
                    type="text"
                    placeholder="Operador transacionado"
                    label="Nome operador transacionado"
                    value={operador}
                    onChange={(event) => setOperador(event.target.value)}
                />  
            </div>

            <Button 
                onClick={handleFiltros}
            >
                Pesquisar
            </Button>   

            <TableExtrato>
                <thead>
                    <tr>
                        <th colSpan="2"> Saldo total: R$ 50,00 </th>
                        <th colSpan="2">Saldo no período R$50,00</th>
                    </tr>
                    <tr>
                        {titleExtrato.map( (titulo) => (
                            <th  
                                key={titulo.title}
                            >
                            {titulo.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentTableData.map(item => {
                        return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </TableExtrato>
            
            <Pagination
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    )
}