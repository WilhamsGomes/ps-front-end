import styles from "./style.module.css";

import InputForm from "../InputForm/index";
import Button from "../ButtonForm/index";
import TableExtrato from "../TableExtrato";

import React, { useState, useMemo } from 'react';
import Pagination from '../PaginationTable/Pagination';

import data from './data/mock-data.json';

import "./style.css"

let PageSize = 5;

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

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {

      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return data.slice(firstPageIndex, lastPageIndex);
      
    }, [currentPage]);

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