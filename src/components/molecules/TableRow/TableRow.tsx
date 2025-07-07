import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type TableRowProps = PropsWithChildren<HTMLAttributes<HTMLTableRowElement>> & {
  isStriped?: boolean;
};

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, className, isStriped, ...rest }, ref) => {
    return (
      <tr
        className={twMerge(
          isStriped && 'odd:bg-white even:bg-gray-50 hover:bg-gray-100',
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </tr>
    );
  }
);

TableRow.displayName = 'TableRow';

export default TableRow;
