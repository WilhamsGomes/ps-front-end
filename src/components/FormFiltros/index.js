import React, { useState, useMemo, useContext } from 'react';

import styles from "./style.module.css";
import "./style.css";
import { BiSearch } from "react-icons/bi";

import InputForm from "../InputForm/index";
import Button from "../ButtonForm/index";
import TableExtrato from "../TableExtrato";
import SelectContas from "../SelectContas";
import Pagination from '../PaginationTable/Pagination';

import { MyContext } from '../Context/useContext';

let PageSize = 5;

export default function FormFiltros(){

    const conta = useContext(MyContext);

    const titleExtrato = [
        {title: "Dados"},
        {title: "Valentia"},
        {title: "Tipo"},
        {title: "Nome operador transacionado"}
    ]

    const [currentPage, setCurrentPage] = useState(1);
   
    const [operador, setOperador] = useState("");
    const [dataInicial, setDataInicial] = useState("");
    const [dataFinal, setDataFinal] = useState("");
    const [transferencias, setTransferencias] = useState([]);

    const currentTableData = useMemo(() => {

        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return transferencias.slice(firstPageIndex, lastPageIndex);
        
    }, [currentPage, transferencias]);

    function handlePesquisar(){

        if((dataInicial === "" && dataFinal === "") ){
            if (conta.idConta > 0 && conta.idConta != null){
                handleExtrato(dataInicial, dataFinal, operador, conta.idConta)
            } else {
                alert("Informe uma conta desejada")
            }
        } else if(dataInicial !== "" && dataFinal !== ""){
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

        let baseUrl = "http://localhost:8080/transferencias"

        if(contaId && dataInicial && dataFinal && !operador){
            baseUrl = baseUrl+`/contas/periodo?conta_id=${contaId}&dataInicio=${dataInicial}&dataFinal=${dataFinal}`
        }

        if(contaId && dataInicial && dataFinal && operador){
            baseUrl = baseUrl+`/contas/operadores/periodo?conta_id=${contaId}&dataInicio=${dataInicial}&dataFinal=${dataFinal}&nome_operador_transacao=${operador}`
        }

        if(contaId && !dataInicial && !dataFinal && operador){
            baseUrl = baseUrl+`/contas/operadores?conta_id=${contaId}&nome_operador_transacao=${operador}`
        }

        if(contaId && !dataInicial && !dataFinal && !operador){
            baseUrl = baseUrl+"/contas?conta_id="+contaId
        }

        fetch(baseUrl)
            .then((response) => {
                return response.json()
            }).then((data) =>  {
                setTransferencias(data)
            })
            .catch((error) => {
                console.log("erro", error)
            })

        gerarSaldoTotal()
    }

    const saldoPeriodo = useMemo(() => {
        const saldoTotal = transferencias.reduce((accumulator, transferencia) => {
            return accumulator + (transferencia.valor);
        }, 0);
        return saldoTotal.toFixed(1)
        
    }, [transferencias]);

    const [saldoTotal, setSaldoTotal] = useState([])
    
    function gerarSaldoTotal(){

        fetch(`http://localhost:8080/transferencias/contas?conta_id=${conta.idConta}`)
            .then((response) => {
                return response.json()
            }).then((data) =>  {
                setSaldoTotal(data)
            })
            .catch((error) => {
                console.log("erro", error)
            })

    }

    const saldoTotalConta = useMemo(() => {
        const saldoTotalConta = saldoTotal.reduce((accumulator, transferencia) => {
            return accumulator + (transferencia.valor);
        }, 0);
        return saldoTotalConta.toFixed(1)
        
    }, [saldoTotal]);

    return (
        <div className={styles.form}>

            <SelectContas
                onChange={(event) => event.target.value > 0 ? conta.setIdConta(event.target.value) : conta.setIdConta(null)}
            />

            <div className={styles.pesquisar}> 
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
                    onClick={handlePesquisar}
                >
                    Pesquisar
                    <BiSearch size="1.2rem"/>
                </Button>   
            </div> 

            <TableExtrato>
                <thead>
                    <tr>
                        <th colSpan="2"> Saldo total:  {saldoTotalConta}</th>
                        <th colSpan="2">Saldo no período:  {saldoPeriodo} </th>
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
                            <td>{item.data_transferencia}</td>
                            <td>{item.valor}</td>
                            <td>{item.tipo}</td>
                            <td>{item.nome_operador_transacao}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </TableExtrato>
            
            <Pagination
                currentPage={currentPage}
                totalCount={transferencias.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    )
}