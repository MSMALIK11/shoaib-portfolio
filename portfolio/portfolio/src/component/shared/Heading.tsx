interface HeadingProp {
  variant?: 'primary' | 'secondary';
  text: string;
  className?: string;
}

const Heading = ({ className = '', text, variant = 'primary' }: HeadingProp) => {
  const baseClass =
    variant === 'primary'
      ? 'text-[#1e293b] text-sm font-semibold' // slate-800
      : 'text-slate-500 text-xs font-medium';   // muted secondary

  return <p className={`${baseClass} ${className}`}>{text}</p>;
};

export default Heading;
