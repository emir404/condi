export type MenuIconProps = {
  className?: string;
};

function IconBase({
  className,
  children,
}: MenuIconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function BreadIcon({ className }: MenuIconProps) {
  return (
    <IconBase className={className}>
      <path d="M240,80a40,40,0,0,0-40-40H48a40,40,0,0,0-16,76.65V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V116.65A40.06,40.06,0,0,0,240,80ZM48,120a8,8,0,0,0,0-16,24,24,0,0,1,0-48h96a24,24,0,0,1,0,48,8,8,0,0,0,0,16v80H48Zm152-16a8,8,0,0,0,0,16v80H160V116.65A40,40,0,0,0,176,56h24a24,24,0,0,1,0,48Z" />
    </IconBase>
  );
}

export function CakeIcon({ className }: MenuIconProps) {
  return (
    <IconBase className={className}>
      <path d="M224,120H208V88a8,8,0,0,0-8-8H136V60.42a24,24,0,1,0-16,0V80H56a8,8,0,0,0-8,8v32H32a8,8,0,0,0-8,8v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V128A8,8,0,0,0,224,120ZM120,36a8,8,0,1,1,8,8A8,8,0,0,1,120,36ZM64,96H192v24H64ZM216,208H40V184a24.11,24.11,0,0,1,15.75,5.86,8,8,0,0,0,10.5,0,24.06,24.06,0,0,1,31.5,0,8,8,0,0,0,10.5,0,24.06,24.06,0,0,1,31.5,0,8,8,0,0,0,10.5,0A24.11,24.11,0,0,1,216,184Zm0-40.42a40.07,40.07,0,0,0-26,9.62,40.06,40.06,0,0,0-52,0,40.06,40.06,0,0,0-52,0,40.07,40.07,0,0,0-26-9.62V136H216Z" />
    </IconBase>
  );
}

export function CupcakeIcon({ className }: MenuIconProps) {
  return (
    <IconBase className={className}>
      <circle cx="128" cy="60" r="12" />
      <path d="M72,124a56,56,0,0,1,112,0Z" />
      <path d="M66,132H190l-14,78a8,8,0,0,1-7.88,6.6H87.9A8,8,0,0,1,80,210Z" />
    </IconBase>
  );
}

export function CoffeeIcon({ className }: MenuIconProps) {
  return (
    <IconBase className={className}>
      <path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z" />
    </IconBase>
  );
}

