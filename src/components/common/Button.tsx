import { MouseEventHandler, PropsWithChildren } from 'react';

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  secondary?: boolean;
  small?: boolean;
};

const BUTTON_STYLES = {
  primary: 'bg-primary text-white',
  secondary: 'bg-white text-primary border border-primary',
  small: 'py-1 px-2 text-sm font-normal',
  medium: 'py-2 px-4 font-semibold',
};

function Button({
  onClick,
  children,
  secondary,
  small,
}: PropsWithChildren<ButtonProps>) {
  const styleClasses = secondary
    ? BUTTON_STYLES.secondary
    : BUTTON_STYLES.primary;
  const sizeClasses = small ? BUTTON_STYLES.small : BUTTON_STYLES.medium;

  return (
    <button
      onClick={onClick}
      className={`rounded ${styleClasses} ${sizeClasses}`}
    >
      {children}
    </button>
  );
}

export default Button;
