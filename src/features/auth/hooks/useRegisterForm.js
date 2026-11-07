import { useState } from "react";

import { REGISTER_STEPS, USER_ROLES } from "../../../core/utils/constants";
import { passwordValidators } from "../../../core/utils/validators";

const INITIAL_FORM_DATA = {
  nome: "",
  nomeLoja: "",
  email: "",
  telefone: "",
  senha: "",
};

export function useRegisterForm() {
  const [step, setStep] = useState(REGISTER_STEPS.ROLE);
  const [selectedRole, setSelectedRole] = useState(USER_ROLES.USER);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [showWelcome, setShowWelcome] = useState(false);

  const changeField = ({ target: { name, value } }) => {
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const nextStep = () => setStep((currentStep) => currentStep + 1);
  const previousStep = () => setStep((currentStep) => Math.max(REGISTER_STEPS.ROLE, currentStep - 1));
  const passwordRequirements = {
    hasMinLength: passwordValidators.hasMinLength(formData.senha),
    hasUppercase: passwordValidators.hasUppercase(formData.senha),
    hasNumber: passwordValidators.hasNumber(formData.senha),
  };

  return {
    step,
    setStep,
    selectedRole,
    setSelectedRole,
    formData,
    changeField,
    nextStep,
    previousStep,
    showWelcome,
    completeRegistration: () => setShowWelcome(true),
    passwordRequirements,
    isPasswordValid: passwordValidators.isValid(formData.senha),
  };
}
