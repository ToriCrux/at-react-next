import React from "react";
import StarMeter from "./StarMeter";
import { Vendor } from "../data/seriesStore";

export default function VendorInfo({ info }: { info: Vendor }) {
  return (
    // Bloco com dados da locadora responsável pela oferta
    <section className="ls16-vendor">
      <h3>Informações da LocaSeries</h3>

      {/* Dados básicos de contato do vendedor */}
      <p>
        <strong>Nome:</strong> {info.name}
      </p>
      <p>
        <strong>E-mail:</strong> {info.email}
      </p>
      <p>
        <strong>Telefone:</strong> {info.phone}
      </p>

      {/* Avaliação média do vendedor em estrelas */}
      <StarMeter value={info.rating} />
    </section>
  );
}
