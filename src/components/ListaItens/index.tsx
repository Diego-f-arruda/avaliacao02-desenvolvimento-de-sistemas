'use state'

import axios from "axios";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { v4 as uuid } from 'uuid';

import styles from './styles.module.css';
import { DataGrid } from "@mui/x-data-grid";

export default function ListaItens(){
    type itensProps = {
        id: number;
        item: string;
        quantidade: number;
        checked: boolean;
    }

    
    
    let itens: itensProps = [
        {id: 1, item: "macarrao", quantidade: 2}
    ]

    return(
        <>
            <div className={styles.container}>
                <ol>
                    <li>{itens.item} {itens.quantidade}</li>
                </ol>
            </div>
        </>
    )
}