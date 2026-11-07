import { Link, useNavigate } from "react-router-dom";

import { REGISTER_STEPS, USER_ROLES } from "../../../core/utils/constants";
import WelcomeScreen from "../../../components/ui/WelcomeScreen/WelcomeScreen";
import RegisterPassword from "../components/RegisterPassword";
import RegisterRoleSelect from "../components/RegisterRoleSelect";
import RegisterUserData from "../components/RegisterUserData";
import { useRegisterForm } from "../hooks/useRegisterForm";
import BrandLogo from "../../../shared/components/ui/BrandLogo/BrandLogo";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const form = useRegisterForm();

  if (form.showWelcome) {
    const accountType = form.selectedRole === USER_ROLES.STORE ? "casa_religiao" : form.selectedRole;
    const userName = form.selectedRole === USER_ROLES.STORE ? form.formData.nomeLoja : form.formData.nome;
    return <WelcomeScreen accountType={accountType} userName={userName || "Usuário"} onComplete={() => navigate("/dashboard")} />;
  }

  const goBack = () => {
    if (form.step === REGISTER_STEPS.ROLE) navigate("/login");
    else form.previousStep();
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <header className="register-header">
          <button type="button" className="btn-back" onClick={goBack}><span>{form.step === REGISTER_STEPS.ROLE ? "Já tenho conta" : "Voltar"}</span></button>
          <div className="mini-logo"><BrandLogo compact className="register-brand-logo" /></div>
        </header>
        <span className="step-indicator">Passo {form.step} de 3</span>
        {form.step === REGISTER_STEPS.ROLE && <RegisterRoleSelect selectedRole={form.selectedRole} onRoleChange={form.setSelectedRole} onNext={form.nextStep} />}
        {form.step === REGISTER_STEPS.DETAILS && <RegisterUserData role={form.selectedRole} formData={form.formData} onChange={form.changeField} onNext={form.nextStep} />}
        {form.step === REGISTER_STEPS.PASSWORD && <RegisterPassword role={form.selectedRole} formData={form.formData} onChange={form.changeField} requirements={form.passwordRequirements} isValid={form.isPasswordValid} onEdit={() => form.setStep(REGISTER_STEPS.DETAILS)} onSubmit={form.completeRegistration} />}
        <p className="register-footer">Já tem conta? <Link to="/login">Entrar</Link></p>
      </div>
    </div>
  );
}

export default Register;
