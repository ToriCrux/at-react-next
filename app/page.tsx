import Link from "next/link";

export default function Home() {
  const qs = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <main>
      <h1 className="home-title">Assessment — Mobile-First UI com React</h1>
      <p className="home-sub">Verifique as questões abaixo para conferir o desenvolvimento das questões propostas para o projeto:</p>

      <ul className="cards" role="list">
        {qs.map((n) => (
          <li key={n} className="card">
            <h2>Questão {n}</h2>
            <Link href={`/questao${n}`} className="btn">
              Verificar questão
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
