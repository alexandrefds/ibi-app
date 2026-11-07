import { useState } from "react";
import { Link } from "react-router-dom";

import FormField from "../../../shared/components/ui/FormField/FormField";
import PasswordInput from "../../../shared/components/ui/PasswordInput/PasswordInput";
import BrandLogo from "../../../shared/components/ui/BrandLogo/BrandLogo";
import "./Login.css";

const phoneIcon = <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
const lockIcon = <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.8"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>;

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const changeCredentials = ({ target: { name, value } }) => setCredentials((current) => ({ ...current, [name]: value }));

  return (
    <div className="login-page">
      <div className="bg-ornament top-right" /><div className="bg-ornament bottom-left" />
      <div className="login-container">
        <div className="brand-header"><BrandLogo className="login-brand-logo" /><span className="brand-subtitle">PRODUTOS E SERVIÇOS SAGRADOS</span></div>
        <div className="form-header"><h2>Bem-vindo de volta</h2><p>Entre na sua conta para continuar sua jornada espiritual.</p></div>
        <form className="login-form" onSubmit={(event) => event.preventDefault()}>
          <FormField label="Telefone ou e-mail" name="email" value={credentials.email} onChange={changeCredentials} placeholder="(00) 00000-0000" icon={phoneIcon} required />
          <PasswordInput label="Senha" name="password" value={credentials.password} onChange={changeCredentials} placeholder="Sua senha" icon={lockIcon} required />
          <a href="#" className="forgot-link">Esqueci minha senha</a>
          <button type="submit" className="btn-main">Entrar na conta</button>
        </form>
        <span className="divider">ou</span>
        <div className="social-group"><button type="button" className="btn-social">Google</button><button type="button" className="btn-social">Facebook</button></div>
        <p className="footer-text">Novo no IBI? <Link to="/cadastro">Criar conta gratuita</Link></p>
      </div>
    </div>
  );
}

export default Login;
