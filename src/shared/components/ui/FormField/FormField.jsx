function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  icon,
  trailingAction,
  error,
  required = false,
  ...inputProps
}) {
  return (
    <div className="input-group">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input-wrapper">
        {icon}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          {...inputProps}
        />
        {trailingAction}
      </div>
      {error && <span id={`${name}-error`} role="alert">{error}</span>}
    </div>
  );
}

export default FormField;
