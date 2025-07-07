import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import SearchInput from './SearchInput';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
}));

describe('SearchInput', () => {
  const replaceMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useRouter as jest.Mock).mockReturnValue({ replace: replaceMock });
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    (usePathname as jest.Mock).mockReturnValue('/');
  });

  it('should render input and search icon', () => {
    render(<SearchInput />);

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    const searchIcon = screen.getByTestId('search-icon');
    expect(searchIcon).toBeInTheDocument();
  });

  it('should update query param when typing', async () => {
    render(<SearchInput />);

    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'Beth' } });

    await waitFor(() => {
      expect(replaceMock).toHaveBeenCalledWith('/?search=Beth');
    });
  });

  it('should clear query param when clicking clear button', async () => {
    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams('search=Rick')
    );

    render(<SearchInput />);

    const searchInput = screen.getByTestId('search-input');

    expect(searchInput).toHaveValue('Rick');

    const clearButton = screen.getByTestId('clear-button');
    fireEvent.click(clearButton);

    expect(replaceMock).toHaveBeenCalledWith('/?');
  });

  it('should not show clear button when input is empty', () => {
    render(<SearchInput />);

    const clearButton = screen.queryByTestId('clear-button');
    expect(clearButton).toBeNull();
  });

  it('should show clear button after typing', () => {
    render(<SearchInput />);

    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'Morty' } });

    const clearButton = screen.getByTestId('clear-button');
    expect(clearButton).toBeInTheDocument();
  });
});
