import { MouseEventHandler } from 'react';

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: string;
};

function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className='bg-primary text-white font-semibold py-2 px-4 rounded'
    >
      {children}
    </button>
  );
}

export default Button;
