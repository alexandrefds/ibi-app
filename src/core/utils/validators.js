export const passwordValidators = {
  hasMinLength: (password) => password.length >= 8,
  hasUppercase: (password) => /[A-Z]/.test(password),
  hasNumber: (password) => /[0-9]/.test(password),
  isValid(password) {
    return this.hasMinLength(password) && this.hasUppercase(password) && this.hasNumber(password);
  },
};
