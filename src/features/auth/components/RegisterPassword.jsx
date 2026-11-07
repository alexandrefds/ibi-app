import { ROLE_CONFIG, USER_ROLES } from "../../../core/utils/constants";
import PasswordInput from "../../../shared/components/ui/PasswordInput/PasswordInput";

const lockIcon = <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.8"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>;

function RegisterPassword({ role, formData, onChange, requirements, isValid, onEdit, onSubmit }) {
  const displayName = role === USER_ROLES.STORE ? formData.nomeLoja : formData.nome;
  return (
    <div className="step-three-container">
      <div className="user-profile-card"><div className="avatar-circle">{displayName ? displayName.charAt(0).toUpperCase() : "U"}</div><div className="user-info"><p className="user-name">{formData.nome || "Novo Usuário"}</p><p className="user-role">{displayName || ROLE_CONFIG[role].label}</p></div><button type="button" className="btn-edit" onClick={onEdit}>Editar</button></div>
      <div className="step-three-header"><h1>Crie sua senha</h1><p>Use uma senha segura para proteger sua conta no IBI</p></div>
      <form className="step-three-form" onSubmit={(event) => { event.preventDefault(); if (isValid) onSubmit(); }}>
        <PasswordInput label="Senha" name="senha" value={formData.senha} onChange={onChange} placeholder="Mínimo 8 caracteres" icon={lockIcon} required />
        <div className="password-requirements">
          <div className={`requirement-item ${requirements.hasMinLength ? "valid" : ""}`}><span className="check-circle" />Mínimo 8 caracteres</div>
          <div className={`requirement-item ${requirements.hasUppercase ? "valid" : ""}`}><span className="check-circle" />Uma letra maiúscula</div>
          <div className={`requirement-item ${requirements.hasNumber ? "valid" : ""}`}><span className="check-circle" />Um número</div>
        </div>
        <p className="terms-text">Ao criar uma conta você concorda com os <a href="#">Termos de Uso</a> e <a href="#">Política de Privacidade</a></p>
        <button type="submit" className={`btn-continue ${role}`} disabled={!isValid}>Criar minha conta</button>
      </form>
    </div>
  );
}

export default RegisterPassword;
