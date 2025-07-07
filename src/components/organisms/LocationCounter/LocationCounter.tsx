import { HTMLAttributes } from 'react';

import { InfoCard } from '@/components/molecules';
import { useLocationCount } from '@/hooks';

type LocationCounterProps = HTMLAttributes<HTMLDivElement>;

const LocationCounter = ({ ...rest }: LocationCounterProps) => {
  const { count, loading } = useLocationCount();

  return (
    <InfoCard
      text={count.toString()}
      title="Locations"
      {...rest}
      loading={loading}
      loadingMessage="Counting locations..."
    />
  );
};

export default LocationCounter;
