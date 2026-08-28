const produtos = [
  { nome: "Tênis A", preco: "R$ 199,90", imagem: "/tenis1.jpg" },
  { nome: "Tênis B", preco: "R$ 249,90", imagem: "/tenis2.jpg" },
  { nome: "Tênis C", preco: "R$ 179,90", imagem: "/tenis3.jpg" },
  { nome: "Tênis D", preco: "R$ 299,90", imagem: "/tenis4.jpg" },
  { nome: "Tênis E", preco: "R$ 159,90", imagem: "/tenis5.jpg" },
];

export default function Exercicio4() {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
        {produtos.map((produto) => (
          <div
            key={produto.nome}
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px",
              width: "150px",
              textAlign: "center",
            }}
          >
            <img
              src={produto.imagem}
              alt={produto.nome}
              style={{ width: "100%" }}
            />
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
          </div>
        ))}
      </div>
      <footer
        style={{
          backgroundColor: "gray",
          color: "white",
          textAlign: "center",
          padding: "15px",
        }}
      >
        Loja de Calçados Exemplo
      </footer>
    </div>
  );
}