import useCartStore from "../js/useCartStore";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";

const CartPage = () => {
  const { cart, updateQty, removeFromCart, clearCart } = useCartStore();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const payload = { ...data, cart };
    axios.post("/api/send-budget", payload)
      .then(() => {
        toast.success("Cotação enviada!");
        clearCart();
      })
      .catch(() => toast.error("Falha ao enviar a cotação."));
  };

  return (
    <div className="cart-page">
      <h1>Carrinho</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <input
              type="number"
              min="1"
              value={item.qty}
              onChange={(e) => updateQty(item.id, e.target.value)}
            />
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </div>
        ))
      )}

      <h2>Seus dados</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          placeholder="Seu nome"
          required
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Seu e-mail"
          required
        />
        <button type="submit">Enviar Cotação</button>
      </form>
    </div>
  );
};

export default CartPage;
