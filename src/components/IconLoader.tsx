import { IconAttributes } from "@/types";
export const IconLoader = ({
  size = 24,
  stroke = 1.5,
  className,
}: IconAttributes) => {
  const width = Math.round(size * (24 / 24));
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
        strokeWidth={stroke}
        d="M12 3a9 9 0 1 0 9 9"
      ></path>
    </svg>
  );
};
