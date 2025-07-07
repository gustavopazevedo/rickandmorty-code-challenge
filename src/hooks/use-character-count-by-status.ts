import { useMemo } from 'react';

import { useGetCharacterCountByStatusQuery } from '@/generated/graphql';

type UseCharactersCountByStatusArgs = {
  status: 'Alive' | 'Dead' | 'unknown';
};

const useCharacterCountByStatus = ({
  status,
}: UseCharactersCountByStatusArgs) => {
  const { data, error, loading } = useGetCharacterCountByStatusQuery({
    fetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    variables: {
      status,
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

export default useCharacterCountByStatus;
