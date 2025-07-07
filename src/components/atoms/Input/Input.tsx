import React, { forwardRef, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          'w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:ring-1 focus:ring-gray-500 focus:outline-none',
          className
        )}
        {...rest}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
