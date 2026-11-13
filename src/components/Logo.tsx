interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

export default function Logo({ className = '', variant = 'full' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo.svg"
        alt="Vinay Packers and Movers logo"
        className="h-11 w-11 shrink-0 drop-shadow-sm"
        width={44}
        height={44}
      />
      {variant === 'full' && (
        <div className="flex flex-col leading-tight">
          <span className="font-display text-lg font-bold tracking-tight text-navy-900">
            VINAY
          </span>
          <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-orange-600">
            Packers &amp; Movers
          </span>
        </div>
      )}
    </div>
  );
}
