import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Produto A", price: 100 },
  { id: 2, name: "Produto B", price: 200 },
  { id: 3, name: "Produto C", price: 150 },
  { id: 4, name: "Produto D", price: 250 },
];

const Home = () => {
  return (
    <div className="product-page">
      <h1 className="text-3xl font-bold mb-6">Produtos em Destaque</h1>

      <div className="product-grid">
        {products.map((p) => (
          <Link key={p.id} to={`/produto/${p.id}`} className="product-card">
            <h2>{p.name}</h2>
            <p>R$ {p.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
