import { useMemo } from 'react';

import { useGetCharactersQuery } from '@/generated/graphql';

type UseCharactersArgs = {
  page: number;
  name?: string | null;
  skip?: boolean;
};

const useCharacters = ({
  page = 1,
  name = null,
  skip = false,
}: UseCharactersArgs) => {
  const { data, error, loading, fetchMore } = useGetCharactersQuery({
    fetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    skip,
    variables: {
      page,
      ...(name && {
        filter: {
          name,
        },
      }),
    },
  });

  const characters = useMemo(() => {
    return data?.characters?.results ?? [];
  }, [data?.characters?.results]);

  const total = useMemo(() => {
    return data?.characters?.info?.count ?? 0;
  }, [data?.characters?.info?.count]);

  return {
    characters,
    error,
    loading,
    fetchMore,
    nextPage: data?.characters?.info?.next ?? null,
    total,
  };
};

export default useCharacters;
