import { renderHook } from '@testing-library/react';

import { useGetCharactersQuery } from '@/generated/graphql';
import { useCharacters } from '@/hooks';

jest.mock('@/generated/graphql');

const mockedUseGetCharactersQuery = useGetCharactersQuery as jest.Mock;

describe('useCharacters', () => {
  const mockData = {
    characters: {
      results: [
        { id: '1', name: 'Rick Sanchez' },
        { id: '2', name: 'Morty Smith' },
      ],
      info: {
        count: 100,
        next: 2,
      },
    },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return characters, total, and nextPage', () => {
    mockedUseGetCharactersQuery.mockReturnValue({
      data: mockData,
      loading: false,
      error: undefined,
      fetchMore: jest.fn(),
    });

    const { result } = renderHook(() => useCharacters({ page: 1, name: null }));

    expect(result.current.characters).toEqual(mockData.characters.results);
    expect(result.current.total).toBe(100);
    expect(result.current.nextPage).toBe(2);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it('should return empty array and 0 total if data is undefined', () => {
    mockedUseGetCharactersQuery.mockReturnValue({
      data: undefined,
      loading: false,
      error: undefined,
      fetchMore: jest.fn(),
    });

    const { result } = renderHook(() => useCharacters({ page: 1, name: null }));

    expect(result.current.characters).toEqual([]);
    expect(result.current.total).toBe(0);
    expect(result.current.nextPage).toBe(null);
  });

  it('should not run query if skip is true', () => {
    mockedUseGetCharactersQuery.mockReturnValue({
      data: undefined,
      loading: false,
      error: undefined,
      fetchMore: jest.fn(),
    });

    const { result } = renderHook(() =>
      useCharacters({ page: 1, name: null, skip: true })
    );

    expect(mockedUseGetCharactersQuery).toHaveBeenCalledWith(
      expect.objectContaining({ skip: true })
    );
    expect(result.current.characters).toEqual([]);
  });

  it('should call fetchMore with the correct variables when invoked', async () => {
    const fetchMoreMock = jest.fn();

    mockedUseGetCharactersQuery.mockReturnValue({
      data: {
        characters: {
          results: [{ id: '1', name: 'Rick Sanchez' }],
          info: { count: 100, next: 2 },
        },
      },
      loading: false,
      error: undefined,
      fetchMore: fetchMoreMock,
    });

    const { result } = renderHook(() =>
      useCharacters({ page: 1, name: 'Rick' })
    );

    result.current.fetchMore({
      variables: {
        page: 2,
        filter: { name: 'Rick' },
      },
    });

    expect(fetchMoreMock).toHaveBeenCalledWith({
      variables: {
        page: 2,
        filter: { name: 'Rick' },
      },
    });
  });
});
