import { HTMLAttributes } from 'react';

import { InfoCard } from '@/components/molecules';
import { useCharacterCountByStatus } from '@/hooks';
type AliveCharactersCounterProps = HTMLAttributes<HTMLDivElement>;

const AliveCharactersCounter = ({ ...rest }: AliveCharactersCounterProps) => {
  const { count, loading } = useCharacterCountByStatus({ status: 'Alive' });

  return (
    <InfoCard
      text={count.toString()}
      title="Alive characters"
      {...rest}
      loading={loading}
      loadingMessage="Counting alive characters..."
    />
  );
};

export default AliveCharactersCounter;
