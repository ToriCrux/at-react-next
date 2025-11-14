import React from "react";
import styles from "../styles/TopicHero.module.css";
import { Topic } from "../data/forumData";

// Bloco principal do tópico com título, subtítulo, descrição e métricas
export default function TopicDetails({ topic }: { topic: Topic }) {
  return (
    <section className={styles.topic}>
      {/* Título e subtítulo do tópico */}
      <h2>{topic.title}</h2>
      <h3>{topic.subtitle}</h3>

      {/* Texto descritivo explicando o contexto da discussão */}
      <p className={styles.desc}>{topic.description}</p>

      {/* Metadados de engajamento do tópico */}
      <div className={styles.meta}>
        <span>❤️ {topic.likes}</span>
        <span>💬 {topic.responses}</span>
        <span>📅 {topic.date}</span>
      </div>
    </section>
  );
}
