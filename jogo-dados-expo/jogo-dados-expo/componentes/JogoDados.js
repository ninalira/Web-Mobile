import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Dado from "./Dado";

export default function JogoDados() {
  const [rodada, setRodada] = useState(1); 
  const [turno, setTurno] = useState(1); 
  const [dado1Jogador1, setDado1Jogador1] = useState(null);
  const [dado2Jogador1, setDado2Jogador1] = useState(null);

  const [dado1Jogador2, setDado1Jogador2] = useState(null);
  const [dado2Jogador2, setDado2Jogador2] = useState(null);

  const [resultadoRodada, setResultadoRodada] = useState("");

  const [placarJogador1, setPlacarJogador1] = useState(0);
  const [placarJogador2, setPlacarJogador2] = useState(0);

  const [jogoFinalizado, setJogoFinalizado] = useState(false);
  const [resultadoFinal, setResultadoFinal] = useState("");

  function rolarDado() {
    return Math.floor(Math.random() * 6) + 1; 
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

  const botao1Desabilitado = jogoFinalizado || turno !== 1;
  const botao2Desabilitado = jogoFinalizado || turno !== 2;

  return (
    <View style={styles.jogoDados}>
      <Text style={styles.titulo}>Jogo de Dados</Text>

      <Text style={styles.rodadaAtual}>Rodada {rodada}/5</Text>

      <View style={styles.jogadores}>
        <View style={styles.jogador}>
          <Text style={styles.nomeJogador}>Jogador 1</Text>
          <View style={styles.dadosJogador}>
            <Dado valor={dado1Jogador1} />
            <Dado valor={dado2Jogador1} />
          </View>
          <Pressable
            style={[styles.botaoJogar, botao1Desabilitado && styles.botaoDesabilitado]}
            onPress={jogarJogador1}
            disabled={botao1Desabilitado}
          >
            <Text style={[styles.textoBotaoJogar, botao1Desabilitado && styles.textoDesabilitado]}>
              Jogar
            </Text>
          </Pressable>
        </View>

        <View style={styles.divisor} />

        <View style={styles.jogador}>
          <Text style={styles.nomeJogador}>Jogador 2</Text>
          <View style={styles.dadosJogador}>
            <Dado valor={dado1Jogador2} />
            <Dado valor={dado2Jogador2} />
          </View>
          <Pressable
            style={[styles.botaoJogar, botao2Desabilitado && styles.botaoDesabilitado]}
            onPress={jogarJogador2}
            disabled={botao2Desabilitado}
          >
            <Text style={[styles.textoBotaoJogar, botao2Desabilitado && styles.textoDesabilitado]}>
              Jogar
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.mensagem}>
        <Text style={styles.textoMensagem}>
          {jogoFinalizado ? resultadoFinal : resultadoRodada || " "}
        </Text>
      </View>

      {!jogoFinalizado && resultadoRodada !== "" && (
        <Pressable style={styles.botaoEscuro} onPress={proximaRodada}>
          <Text style={styles.textoBotaoEscuro}>
            {rodada === 5 ? "Ver Resultado Final" : "Próxima Rodada"}
          </Text>
        </Pressable>
      )}

      {jogoFinalizado && (
        <Pressable style={styles.botaoEscuro} onPress={jogarNovamente}>
          <Text style={styles.textoBotaoEscuro}>Jogar Novamente</Text>
        </Pressable>
      )}

      <Text style={styles.placar}>
        Placar — Jogador 1: {placarJogador1} | Jogador 2: {placarJogador2}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  jogoDados: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#1f2937",
    borderRadius: 20,
    paddingTop: 28,
    paddingHorizontal: 24,
    paddingBottom: 32,
    alignItems: "center",
    gap: 18,
    elevation: 4,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
  },
  rodadaAtual: {
    fontWeight: "600",
    color: "#6b7280",
  },
  jogadores: {
    width: "100%",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    gap: 16,
  },
  divisor: {
    width: 1,
    backgroundColor: "#d1d5db",
  },
  jogador: {
    flex: 1,
    alignItems: "center",
    gap: 12,
  },
  nomeJogador: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  dadosJogador: {
    flexDirection: "row",
    gap: 8,
  },
  botaoJogar: {
    minWidth: 90,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#1f2937",
    backgroundColor: "#2563eb",
    alignItems: "center",
  },
  botaoDesabilitado: {
    backgroundColor: "#e5e7eb",
    borderColor: "#d1d5db",
  },
  textoBotaoJogar: {
    color: "#ffffff",
    fontWeight: "600",
  },
  textoDesabilitado: {
    color: "#9ca3af",
  },
  mensagem: {
    width: "100%",
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#1f2937",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "#f9fafb",
  },
  textoMensagem: {
    fontWeight: "700",
    textAlign: "center",
    color: "#111827",
  },
  botaoEscuro: {
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#1f2937",
    backgroundColor: "#111827",
  },
  textoBotaoEscuro: {
    color: "#ffffff",
    fontWeight: "700",
  },
  placar: {
    fontSize: 13,
    color: "#6b7280",
    textAlign: "center",
  },
});