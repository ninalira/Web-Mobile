export default function Exercicio4() {
  const produtos = [
    { nome: "Salto azul", preco: "R$ 199,90", imagem: "/sandalia1.jpg" },
    { nome: "Sandila salto baixo", preco: "R$ 119,90", imagem: "/sandalia2.jpg" },
    { nome: "Salto alto branco", preco: "R$ 179,90", imagem: "/sandalia3.jpg" },
    { nome: "Salto marrom", preco: "R$ 179,90", imagem: "/sandalia4.jpg" },
    { nome: "sandalia de salto vermelha", preco: "R$ 159,90", imagem: "/sandalia5.jpg" },
  ];

  const estiloCard = {
    backgroundColor: "#66bb6a",
    color: "white",
    padding: "10px",
    width: "180px",
    textAlign: "center",
  };

  const estiloImagem = {
    width: "100%",
  };

  const estiloLista = {
    display: "flex",
    gap: "80px",
    padding: "50px",
  };

  const estiloRodape = {
    backgroundColor: "#757575",
    color: "white",
    textAlign: "center",
    padding: "15px",
  };

  return (
    <div>
      <div style={estiloLista}>
        {produtos.map((produto) => (
          <div key={produto.nome} style={estiloCard}>
            <img src={produto.imagem} alt={produto.nome} style={estiloImagem} />
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
          </div>
        ))}
      </div>

      <footer style={estiloRodape}>
        Loja de Calcados Nina
      </footer>
    </div>
  );
}