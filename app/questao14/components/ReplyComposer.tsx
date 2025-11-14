"use client";
import React, { useState } from "react";
import styles from "../styles/ReplyComposer.module.css";

interface Props { currentUser: { name: string }; }

// Campo de comentário para o usuário digitar e enviar uma nova resposta
export default function ReplyComposer({ currentUser }: Props) {

  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim()) {
      alert(`Resposta enviada por ${currentUser.name}: ${message}`); // Simulação do envio com um alert
      setMessage("");// Limpa o campo após o envio
    }
  };

  return (
    <form className={styles.composer} onSubmit={handleSubmit}>
      {/* Identificação do usuário logado */}
      <p className={styles.user}>
        Usuário atual: <strong>{currentUser.name}</strong>
      </p>

      {/* Área de texto controlada pelo estado */}
      <textarea
        className={styles.input}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escreva sua resposta..."
      />

      <div className={styles.actions}>
        <button className={styles.sendBtn} type="submit">Enviar resposta</button>
      </div>
    </form>
  );
}
