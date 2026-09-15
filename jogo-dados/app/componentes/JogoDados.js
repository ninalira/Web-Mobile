"use client"; 
import { useState } from "react";
import Dado from "./Dado";

export default function JogoDados() {
  const [rodada, setRodada] = useState(1); // rodada atual (1 a 5)
  const [turno, setTurno] = useState(1); // de quem é a vez: 1, 2 ou 0 (ninguém)

  // dados do jogador 1 
  const [dado1Jogador1, setDado1Jogador1] = useState(null);
  const [dado2Jogador1, setDado2Jogador1] = useState(null);

  // dados do jogador 2
  const [dado1Jogador2, setDado1Jogador2] = useState(null);
  const [dado2Jogador2, setDado2Jogador2] = useState(null);

  const [resultadoRodada, setResultadoRodada] = useState(""); 

  // placar geral 
  const [placarJogador1, setPlacarJogador1] = useState(0);
  const [placarJogador2, setPlacarJogador2] = useState(0);

  const [jogoFinalizado, setJogoFinalizado] = useState(false);
  const [resultadoFinal, setResultadoFinal] = useState("");


  function rolarDado() {
    return Math.floor(Math.random() * 6) + 1; // número aleatório de 1 a 6
  }

  function jogarJogador1() {
    setDado1Jogador1(rolarDado());
    setDado2Jogador1(rolarDado());
    setTurno(2); 
  }

  function jogarJogador2() {
    const novoDado1 = rolarDado();
    const novoDado2 = rolarDado();
    setDado1Jogador2(novoDado1);
    setDado2Jogador2(novoDado2);

    const somaJogador1 = dado1Jogador1 + dado2Jogador1;
    const somaJogador2 = novoDado1 + novoDado2;

    if (somaJogador1 > somaJogador2) {
      setResultadoRodada("Jogador 1 venceu");
      setPlacarJogador1(placarJogador1 + 1);
    } else if (somaJogador2 > somaJogador1) {
      setResultadoRodada("Jogador 2 venceu");
      setPlacarJogador2(placarJogador2 + 1);
    } else {
      setResultadoRodada("Empate");
    }

    setTurno(0); 
  }

  function proximaRodada() {
    if (rodada === 5) {
      
      if (placarJogador1 > placarJogador2) {
        setResultadoFinal("Jogador 1 venceu o jogo");
      } else if (placarJogador2 > placarJogador1) {
        setResultadoFinal("Jogador 2 venceu o jogo");
      } else {
        setResultadoFinal("Empate geral");
      }
      setJogoFinalizado(true);
      return;
    }

    // senão, prepara a próxima rodada
    setRodada(rodada + 1);
    setDado1Jogador1(null);
    setDado2Jogador1(null);
    setDado1Jogador2(null);
    setDado2Jogador2(null);
    setResultadoRodada("");
    setTurno(1);
  }

  function jogarNovamente() {
    setRodada(1);
    setTurno(1);
    setDado1Jogador1(null);
    setDado2Jogador1(null);
    setDado1Jogador2(null);
    setDado2Jogador2(null);
    setResultadoRodada("");
    setPlacarJogador1(0);
    setPlacarJogador2(0);
    setJogoFinalizado(false);
    setResultadoFinal("");
  }

  // TELA (JSX)
  return (
    <div className="jogo-dados">
      <h1>Jogo de Dados</h1>

      <p className="rodada-atual">Rodada {rodada}/5</p>

      <div className="jogadores">
        {/* JOGADOR 1 */}
        <section className="jogador">
          <h2>Jogador 1</h2>
          <div className="dados-jogador">
            <Dado valor={dado1Jogador1} />
            <Dado valor={dado2Jogador1} />
          </div>
          <button
            className="botao-jogar"
            onClick={jogarJogador1}
            disabled={jogoFinalizado || turno !== 1}
          >
            Jogar
          </button>
        </section>

        <div className="divisor" />

        {/* JOGADOR 2 */}
        <section className="jogador">
          <h2>Jogador 2</h2>
          <div className="dados-jogador">
            <Dado valor={dado1Jogador2} />
            <Dado valor={dado2Jogador2} />
          </div>
          <button
            className="botao-jogar"
            onClick={jogarJogador2}
            disabled={jogoFinalizado || turno !== 2}
          >
            Jogar
          </button>
        </section>
      </div>

      {/* Mensagem de resultado */}
      <div className="mensagem">
        {jogoFinalizado ? resultadoFinal : resultadoRodada || "\u00A0"}
      </div>

      {/* Botão para avançar de rodada, só aparece quando a rodada terminou */}
      {!jogoFinalizado && resultadoRodada !== "" && (
        <button className="botao-jogar-novamente" onClick={proximaRodada}>
          {rodada === 5 ? "Ver Resultado Final" : "Próxima Rodada"}
        </button>
      )}

      {/* Botão Jogar Novamente, só aparece no final do jogo */}
      {jogoFinalizado && (
        <button className="botao-jogar-novamente" onClick={jogarNovamente}>
          Jogar Novamente
        </button>
      )}

      <p className="placar">
        Placar — Jogador 1: {placarJogador1} | Jogador 2: {placarJogador2}
      </p>
    </div>
  );
}