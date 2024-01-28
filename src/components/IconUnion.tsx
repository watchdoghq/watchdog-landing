import { IconAttributes } from "@/types";
export const IconUnion = ({
  size = 24,
  stroke = 1.5,
  className,
}: IconAttributes) => {
  const width = Math.round(size * (1200 / 701));
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 1200 701"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1200 24C1200 10.7452 1189.25 0 1176 0H668C654.745 0 644 10.7452 644 24V315C644 328.255 633.255 339 620 339H24C10.7452 339 0 349.745 0 363V677C0 690.255 10.7451 701 24 701H769C782.255 701 793 690.255 793 677V436C793 422.745 803.745 412 817 412H1176C1189.25 412 1200 401.255 1200 388V24Z"
        fill="currentColor"
      />
    </svg>
  );
};
