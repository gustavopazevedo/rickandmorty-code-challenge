import { PropsWithChildren, TdHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type TableCellProps = PropsWithChildren<
  TdHTMLAttributes<HTMLTableCellElement>
> & {
  isHeader?: boolean;
};

const TableCell = ({
  children,
  className,
  isHeader = false,
  ...rest
}: TableCellProps) => {
  if (isHeader) {
    return (
      <th
        className={twMerge(
          'p-2 text-left font-semibold text-gray-700 lg:p-4',
          className
        )}
        {...rest}
      >
        {children}
      </th>
    );
  }

  return (
    <td className={twMerge('p-2 lg:p-4', className)} {...rest}>
      {children}
    </td>
  );
};

export default TableCell;
