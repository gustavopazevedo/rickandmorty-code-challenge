import { render, screen } from '@testing-library/react';

import TableRow from './TableRow';

describe('TableRow', () => {
  it('should render children correctly', () => {
    render(
      <table>
        <tbody>
          <TableRow data-testid="table-row">
            <td>Row Content</td>
          </TableRow>
        </tbody>
      </table>
    );

    expect(screen.getByTestId('table-row')).toBeInTheDocument();
    expect(screen.getByText('Row Content')).toBeInTheDocument();
  });

  it('should apply striped classes when isStriped is true', () => {
    render(
      <table>
        <tbody>
          <TableRow isStriped data-testid="striped-row">
            <td>Striped Row</td>
          </TableRow>
        </tbody>
      </table>
    );

    const tr = screen.getByTestId('striped-row');
    expect(tr.className).toMatch(/odd:bg-white/);
    expect(tr.className).toMatch(/even:bg-gray-50/);
  });

  it('should not apply striped classes when isStriped is false', () => {
    render(
      <table>
        <tbody>
          <TableRow data-testid="non-striped-row">
            <td>Non-striped Row</td>
          </TableRow>
        </tbody>
      </table>
    );

    const tr = screen.getByTestId('non-striped-row');
    expect(tr.className).not.toMatch(/odd:bg-white/);
    expect(tr.className).not.toMatch(/even:bg-gray-50/);
  });

  it('should merge custom className', () => {
    render(
      <table>
        <tbody>
          <TableRow className="w-full" data-testid="custom-classname-row">
            <td>Custom Class</td>
          </TableRow>
        </tbody>
      </table>
    );

    const tr = screen.getByTestId('custom-classname-row');
    expect(tr?.className).toMatch(/w-full/);
  });
});
