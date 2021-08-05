import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  className,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={`py-3 px-6 text-white border-none rounded-lg
       font-bold transition-all duration-200 transform flex
       items-center justify-center focus:outline-none
       active:scale-95
    ${disabled && "opacity-50 hover:scale-100 "}
    ${className} ${"bg-[#FE595F] hover:scale-105"}`}
      style={{
        boxShadow: "0 0.5rem 1rem rgba(255, 153, 0, 0.25)",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
