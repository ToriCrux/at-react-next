"use client";
import styled from "styled-components";

const panel = "#1b1c1f";
const panel2 = "#232429";
const stroke = "#2d2f34";
const text = "#f3f3f3";
const muted = "#b9bcc6";
const accent = "#87C62E";

export const Card = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 16px auto;
  background: ${panel};
  color: ${text};
  border: 1px solid ${stroke};
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  font-family: "Open Sans", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
`;

export const TopSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid ${stroke};

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr auto; 
    align-items: center;
    gap: 16px;
  }
`;

export const Foto = styled.img`
  width: clamp(96px, 28vw, 128px);
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid ${accent};
  background: #0f1116;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  overflow-wrap: anywhere;

  p {
    margin: 0;
    color: ${muted};
    line-height: 1.35;
  }
`;

export const Nome = styled.h2`
  margin: 0 0 2px 0;
  font-weight: 800;
  font-size: clamp(1rem, 3.6vw, 1.25rem);
  color: ${text};
`;

export const SerieBadge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border: 1px solid ${stroke};
  border-radius: 999px;
  background: ${panel2};
  font-size: 12px;
  color: ${text};
`;

export const Acoes = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  border-top: 1px solid ${stroke};
  padding-top: 10px;

  /* ### TRATATIVA PARA VERSÃO DESKTOP ### */
  @media (min-width: 768px) { 
    border-top: none;
    border-left: 1px solid ${stroke};
    padding: 0 10px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Icone = styled.button`
  background: none;
  border: none;
  color: ${accent};
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  transition: background 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover { background: rgba(135, 198, 46, 0.14); }
  svg { width: 22px; height: 22px; }
`;

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;           
  background: ${panel};
  font-size: 0.95rem;

  th, td {
    padding: 10px;
    border: 1px solid ${stroke};
    color: ${text};
    vertical-align: top;
  }

  th {
    background: ${panel2};
    font-weight: 800;
    text-align: center;
  }

  tr:hover { 
    background: #202226; 
  }

  input[type="checkbox"]{
    appearance: none;
    width: 16px; 
    height: 16px;
    border: 1px solid #3a3c42;
    border-radius: 4px;
    background: #0f1116;
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  input[type="checkbox"]:checked{
    background: ${accent};
    border-color: ${accent};
  }

  input[type="checkbox"]:checked::after{
    content: "";
    position: absolute;
    left: 4px; 
    top: 1px;
    width: 5px; 
    height: 9px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
