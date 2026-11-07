import { ROLE_CONFIG, USER_ROLES } from "../../../core/utils/constants";
import FormField from "../../../shared/components/ui/FormField/FormField";

const userIcon = <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const mailIcon = <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const phoneIcon = <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;

function RegisterUserData({ role, formData, onChange, onNext }) {
  const isStore = role === USER_ROLES.STORE;
  const isDelivery = role === USER_ROLES.DELIVERY;
  const roleConfig = ROLE_CONFIG[role];

  return (
    <div className="step-two-container">
      <div className="step-two-header">
        <div className={`user-badge-group ${role}`}><span className="badge-emoji">{roleConfig.emoji}</span><span className="badge-text">{roleConfig.label}</span></div>
        <h1>Seus dados</h1><p>{isStore ? "Informe os dados do responsável pela loja" : "Preencha suas informações para criar o perfil"}</p>
      </div>
      <form className="step-two-form" onSubmit={(event) => { event.preventDefault(); onNext(); }}>
        <FormField label={isStore ? "Nome do responsável" : "Seu nome completo"} name="nome" value={formData.nome} onChange={onChange} placeholder={isStore ? "Nome do titular da conta" : "Como devemos te chamar?"} icon={userIcon} required />
        {isStore && <FormField label="Nome da loja / terreiro" name="nomeLoja" value={formData.nomeLoja} onChange={onChange} placeholder="Ex: Casa de Ossain" icon={userIcon} required />}
        {!isStore && <FormField label="E-mail" name="email" type="email" value={formData.email} onChange={onChange} placeholder="seu@email.com" icon={mailIcon} required />}
        <FormField label={isStore ? "Telefone comercial" : "Telefone (opcional)"} name="telefone" value={formData.telefone} onChange={onChange} placeholder="(00) 00000-0000" icon={phoneIcon} required={isStore} />
        {isDelivery && <div className="info-box-entregador"><p>Para ativar sua conta de entregador, você precisará enviar uma foto da CNH ou RG após o cadastro.</p></div>}
        <button type="submit" className={`btn-continue ${role}`}>Continuar</button>
      </form>
    </div>
  );
}

export default RegisterUserData;
