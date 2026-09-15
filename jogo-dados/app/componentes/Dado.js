export default function Dado({ valor }) {
  if (!valor) {
    return <div className="dado dado-vazio">?</div>;
  }

  return (
    <img
      className="dado"
      src={`/dados/dado-${valor}.svg`}
      alt={`Dado mostrando o número ${valor}`}
    />
  );
}