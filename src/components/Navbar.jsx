import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ background: "#1e1e1e", padding: "1rem" }}>
      <div className="container" style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/carrinho">Carrinho</Link>
      </div>
    </nav>
  );
};

export default Navbar;
