import { HTMLAttributes } from 'react';

import { InfoCard } from '@/components/molecules';
import { useCharacterCountBySpecies } from '@/hooks';

type HumanCharacterCounterProps = HTMLAttributes<HTMLDivElement>;

const HumanCharacterCounter = ({ ...rest }: HumanCharacterCounterProps) => {
  const { count, loading } = useCharacterCountBySpecies({ species: 'Human' });

  return (
    <InfoCard
      text={count.toString()}
      title="Human characters"
      {...rest}
      loading={loading}
      loadingMessage="Counting human characters..."
    />
  );
};

export default HumanCharacterCounter;
