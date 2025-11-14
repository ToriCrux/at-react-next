"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Info } from "lucide-react";
import styles from "./Q7.module.css";

type Aluguel = { id: number; titulo: string; concluido: boolean };

export default function Q7() {
  const alugueis: Aluguel[] = [
    { id: 1, titulo: "Devolver Outlander – Temporada 1", concluido: true },
    { id: 2, titulo: "Retirar Orphan Black – Temporada 2", concluido: false },
    { id: 3, titulo: "Reservar GOT – Temporada 4", concluido: false },
  ];

  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <div className={styles.headRow}>
          <Image
            src="/foto_perfil.avif"
            alt="Foto do cliente"
            width={110}
            height={146}
            className={styles.foto}
            priority
          />
          <div className={styles.infoBox}>
            <h2 className={styles.nome}>Maria Silva</h2>
            <p>Cliente desde: 12/05/2020</p>
            <p>Plano: Locadora Plus</p>
            <p>Último aluguel: 28/10/2025</p>
          </div>
        </div>
        <Info aria-hidden size={20} className={styles.infoIcon} />
      </header>

      <div className={styles.actions}>
        <button className={styles.iconBtn} aria-label="Ligar para o cliente">
          <Phone />
        </button>
        <button className={styles.iconBtn} aria-label="Enviar e-mail">
          <Mail />
        </button>
        <button className={styles.iconBtn} aria-label="Ver endereço">
          <MapPin />
        </button>
      </div>

      <table className={styles.table} aria-label="Aluguéis do cliente">
        <thead>
          <tr>
            <th>Status</th>
            <th>Aluguéis</th>
          </tr>
        </thead>
        <tbody>
          {alugueis.map((a) => (
            <tr key={a.id}>
              <td className={styles.statusCell}>
                <input type="checkbox" checked={a.concluido} readOnly />
              </td>
              <td className={styles.titleCell}>{a.titulo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
