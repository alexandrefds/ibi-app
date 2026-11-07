import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <main style={{ display: "grid", minHeight: "100vh", placeItems: "center", padding: "2rem", textAlign: "center" }}>
      <section>
        <h1>Conta criada com sucesso</h1>
        <p>O dashboard do IBI será disponibilizado em breve.</p>
        <Link to="/login">Voltar para entrar</Link>
      </section>
    </main>
  );
}

export default Dashboard;
