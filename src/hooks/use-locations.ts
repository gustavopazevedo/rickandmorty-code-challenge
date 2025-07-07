import { useCallback, useEffect, useMemo } from 'react';

import { useGetLocationsQuery } from '@/generated/graphql';

type UseLocationsArgs = {
  getAll?: boolean;
  page: number;
};

const useLocations = ({ page = 1, getAll = false }: UseLocationsArgs) => {
  const { data, error, loading, fetchMore } = useGetLocationsQuery({
    fetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    variables: {
      page,
    },
  });

  const fetchAllLocations = useCallback(
    async (page: number | undefined) => {
      if (page) {
        await fetchMore({
          variables: {
            page,
          },
        });
      }
    },
    [fetchMore]
  );

  useEffect(() => {
    if (getAll && data?.locations?.info?.next) {
      fetchAllLocations(data?.locations?.info?.next);
    }
  }, [data?.locations?.info?.next, fetchAllLocations, getAll]);

  const locations = useMemo(() => {
    if (getAll && data?.locations?.info?.next) {
      return [];
    }

    return data?.locations?.results ?? [];
  }, [data, getAll]);

  return {
    locations,
    error,
    loading,
    fetchMore,
    nextPage: data?.locations?.info?.next,
  };
};

export default useLocations;
