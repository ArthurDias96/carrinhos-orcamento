import { useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import useCartStore from "../js/useCartStore"

const products = [
  { id: 1, name: "Produto A", price: 100 },
  { id: 2, name: "Produto B", price: 200 },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(1);
  const { addToCart } = useCartStore();

  const handleAdd = () => {
    addToCart(product, qty);
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <p>Preço: R$ {product.price}</p>

      <input
        type="number"
        min="1"
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
      />
      <button onClick={handleAdd}>Adicionar ao carrinho</button>
    </div>
  );
};

export default ProductPage;
