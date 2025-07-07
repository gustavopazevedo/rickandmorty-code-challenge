'use client';

import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type IconButtonProps = {
  className?: string;
  icon: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({ className, icon, ...rest }: IconButtonProps) => {
  return (
    <button
      className={twMerge(
        'cursor-pointer rounded-sm bg-white p-1 hover:bg-gray-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        className
      )}
      {...rest}
    >
      {icon}
    </button>
  );
};

export default IconButton;
