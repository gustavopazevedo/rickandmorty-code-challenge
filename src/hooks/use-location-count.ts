import { useMemo } from 'react';

import { useGetLocationCountQuery } from '@/generated/graphql';

const useLocationCount = () => {
  const { data, error, loading } = useGetLocationCountQuery({
    fetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
  });

  const count = useMemo(() => {
    return data?.locations?.info?.count ?? 0;
  }, [data?.locations?.info?.count]);

  return {
    count,
    error,
    loading,
  };
};

export default useLocationCount;
