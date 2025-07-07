import { render } from '@testing-library/react';

import { CharacterTable } from '@/components/organisms';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: () => ({
    get: () => '',
  }),
  usePathname: jest.fn(),
}));

// Mock your custom useCharacters hook
jest.mock('@/hooks', () => ({
  useCharacters: () => ({
    characters: [
      {
        id: '1',
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        location: {
          name: 'Citadel of Ricks',
          __typename: 'Location',
        },
        __typename: 'Character',
      },
      {
        id: '2',
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        location: {
          name: 'Citadel of Ricks',
          __typename: 'Location',
        },
        __typename: 'Character',
      },
    ],
    loading: false,
    error: null,
    nextPage: null,
    fetchMore: jest.fn(),
  }),
}));

describe('CharacterTable Snapshot', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();

    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('should match snapshot', () => {
    const { container } = render(<CharacterTable />);
    expect(container).toMatchSnapshot();
  });
});
