"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import {
  Card,
  TopSection,
  Foto,
  InfoBox,
  Nome,
  Acoes,
  Icone,
  Tabela,
  SerieBadge,
} from "./styles";

type Tarefa = { id: number; nome: string; concluida: boolean };

export default function Q8() {
  const tarefas: Tarefa[] = [
    { id: 1, nome: "Devolver Outlander — Temporada 1", concluida: true },
    { id: 2, nome: "Retirar Orphan Black — Temporada 2", concluida: false },
    { id: 3, nome: "Reservar Game of Thrones — Temporada 4", concluida: false },
  ];

  return (
    <Card aria-label="Card do cliente com tarefas/aluguéis">
      <TopSection>
        <Foto src="/foto_perfil.avif" alt="Foto do cliente" />

        <InfoBox>
          <Nome>Maria Silva</Nome>
          <p>Cliente desde: 12/05/2020</p>
          <p>Plano: Locadora Plus</p>
          <p>Último aluguel: 28/10/2025</p>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "6px" }}>
            <SerieBadge>Outlander</SerieBadge>
            <SerieBadge>Orphan Black</SerieBadge>
            <SerieBadge>GOT</SerieBadge>
          </div>
        </InfoBox>

        <Acoes aria-label="Ações rápidas">
          <Icone aria-label="Ligar">
            <Phone />
          </Icone>
          <Icone aria-label="Enviar e-mail">
            <Mail />
          </Icone>
          <Icone aria-label="Ver endereço">
            <MapPin />
          </Icone>
        </Acoes>
      </TopSection>

      <Tabela aria-label="Lista de tarefas / aluguéis">
        <thead>
          <tr>
            <th>Status</th>
            <th>Aluguéis</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((t) => (
            <tr key={t.id}>
              <td style={{ textAlign: "center" }}>
                <input type="checkbox" checked={t.concluida} readOnly />
              </td>
              <td>{t.nome}</td>
            </tr>
          ))}
        </tbody>
      </Tabela>
    </Card>
  );
}
