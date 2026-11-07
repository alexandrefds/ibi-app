import { ROLE_CONFIG } from "../../../core/utils/constants";

function RegisterRoleSelect({ selectedRole, onRoleChange, onNext }) {
  return (
    <>
      <div className="register-title-group">
        <h1>Criar conta gratuita</h1>
        <p>Como você quer usar o IBI? Escolha o perfil que melhor te representa.</p>
      </div>
      <div className="role-options">
        {Object.entries(ROLE_CONFIG).map(([role, config]) => (
          <div
            key={role}
            className={`role-card ${role} ${selectedRole === role ? "selected" : ""}`}
            onClick={() => onRoleChange(role)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") onRoleChange(role);
            }}
            role="radio"
            aria-checked={selectedRole === role}
            tabIndex={0}
          >
            <div className="role-top">
              <div className="role-icon-wrapper"><span className="role-emoji">{config.emoji}</span></div>
              <div className="role-info"><h3>{config.label}</h3><span className="role-tag">{config.tag}</span><p>{config.description}</p></div>
              <div className="custom-radio" />
            </div>
            {selectedRole === role && <ul className="role-benefits">{config.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>}
          </div>
        ))}
      </div>
      <button type="button" className={`btn-continue ${selectedRole}`} onClick={onNext}>Continuar</button>
    </>
  );
}

export default RegisterRoleSelect;
