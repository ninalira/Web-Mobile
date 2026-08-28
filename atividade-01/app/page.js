import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Exercícios de CSS</h1>
      <ul style={{ lineHeight: "2" }}>
        <li><Link href="/exercicio-210">Exercício pág 210 - Imagem de fundo e H1</Link></li>
        <li><Link href="/exercicio-231">Exercício pág 231 - DIVs centralizados</Link></li>
        <li><Link href="/exercicio-246">Exercício pág 246 - Parágrafo e hyperlinks</Link></li>
        <li><Link href="/exercicio-263">Exercício pág 263 - Loja de calçados</Link></li>
      </ul>
    </main>
  );
}