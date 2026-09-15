import "./globals.css";

export const metadata = {
  title: "Jogo de Dados",
  description: "Jogo de dados para 2 jogadores - Web Mobile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}