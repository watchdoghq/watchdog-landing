import { IconAttributes } from "@/types";
export const IconArrowUpRight = ({
  size = 24,
  stroke = 1.5,
  className,
}: IconAttributes) => {
  const width = Math.round(size * (156 / 155));
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 156 155"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="95.1615"
        y="39.6533"
        width="25"
        height="94"
        transform="rotate(42.4334 95.1615 39.6533)"
        fill="currentColor"
      />
      <rect
        x="113.578"
        y="37.5215"
        width="25"
        height="78"
        transform="rotate(87.4334 113.578 37.5215)"
        fill="currentColor"
      />
      <rect
        x="89.3324"
        y="38.7437"
        width="25"
        height="78"
        transform="rotate(-2.5666 89.3324 38.7437)"
        fill="currentColor"
      />
    </svg>
  );
};
