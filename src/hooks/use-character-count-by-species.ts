import { useMemo } from 'react';

import { useGetCharacterCountBySpeciesQuery } from '@/generated/graphql';

type useCharacterCountBySpeciesArgs = {
  species: string;
};

const useCharacterCountBySpecies = ({
  species,
}: useCharacterCountBySpeciesArgs) => {
  const { data, error, loading } = useGetCharacterCountBySpeciesQuery({
    fetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    variables: {
      species,
    },
  });

  const count = useMemo(() => {
    return data?.characters?.info?.count ?? 0;
  }, [data?.characters?.info?.count]);

  return {
    count,
    error,
    loading,
  };
};

export default useCharacterCountBySpecies;
