export default function Exercicio3() {
  const estiloParagrafo = {
    textDecoration: "underline",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const estiloLink = {
    textDecoration: "none",
    fontWeight: "bold",
    fontFamily: "Times New Roman, Times, serif",
    display: "block",
    marginTop: "10px",
  };

  return (
    <div style={{ padding: "20px" }}>
      <p style={estiloParagrafo}>
        Este e um paragrafo de exemplo para o exercicio de CSS. Todo o texto
        dentro deste paragrafo deve aparecer sublinhado e com a fonte Arial.
      </p>

      <a href="https://open.spotify.com/intl-pt/artist/7t0rwkOPGlDPEhaOcVtOt9" style={estiloLink}>
        Primeiro link
      </a>

      <a href="https://open.spotify.com/intl-pt/artist/1McMsnEElThX1knmY4oliG" style={estiloLink}>
        Segundo link
      </a>
    </div>
  );
}