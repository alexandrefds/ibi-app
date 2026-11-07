function BrandLogo({ compact = false, className = "" }) {
  const source = compact ? "/brand/ibi-symbol.svg" : "/brand/ibi-logo.svg";
  const label = compact ? "IBI" : "IBI — produtos e serviços sagrados";

  return <img className={`brand-logo ${className}`.trim()} src={source} alt={label} />;
}

export default BrandLogo;
