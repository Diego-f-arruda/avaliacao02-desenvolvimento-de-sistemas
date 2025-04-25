"use client";

import { Button, TextField } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { v4 as uuid } from "uuid";

export default function MarketList() {
  useEffect(() => {
    loadItens();
  }, []);

  type Lista = {
    id: string;
    confirm: boolean;
    publishedAt: Date;
  };

  type ListaProps = {
    setLista: Dispatch<SetStateAction<Lista[]>>;
    lista: Lista;
  };
  const [newLista, setNewLista] = useState<string>("");

  function ListaItens({ lista, setLista }: ListaProps) {

    async function loadLista() {
      const response = await axios.get(`http://localhost:3001/${lista.id}`);

      setLista((prev: Lista[]) =>
        prev.map((atual) => (atual.id === lista.id ? response.data : atual))
      );
    }
  }

  function loadItens() {
    // BUSCA AS INFORMAÇÕES NA API FAKE
    // SALVA O VALOR NO ESTADO
  }

  function handleAddItem(event: FormEvent) {
    event.preventDefault();

    const lista = {
      id: uuid(),
      lista: newLista,
      publishedAt: new Date().toISOString(),
    };
  }

  function handleRemoveItem(id: string) {
    // FILTRA O ESTADO E REMOVE O ITEM
    // CHAMA A API PARA REMOVER O ITEM
    // CARREGA OS PRODUTOS NOVAMENTE // loadItens();
  }

  function handleUpdateItem(id: string) {
    // CRIA O OBJETO DO ITEM
    // CHAMA A API PARA ATUALIZAR O ITEM
    // CARREGA OS PRODUTOS NOVAMENTE // loadItens();
  }

  return (
    <div>
      {/* <Header /> */}
      <h1>Compras da Semana</h1>
      <div className="adicionar-itens">
        <TextField label="Digite o item" variant="outlined" />
        <Button variant="outlined">Adicionar Item</Button>
      </div>
      <div className="lista-itens"></div>
    </div>
  );
}
