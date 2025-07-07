'use client';

import { Suspense } from 'react';

import { SearchInput } from '@/components/molecules';
import { Section } from '@/components/organisms';
import {
  AliveCharacterCounter,
  CharacterTable,
  HumanCharacterCounter,
  LocationChart,
  LocationCounter,
} from '@/components/organisms';

export default function Home() {
  return (
    <div className="m-auto grid max-w-dvw grid-cols-6 gap-4 lg:gap-6 min-2xl:w-full min-2xl:max-w-7xl">
      <Section title="Characters" className="col-span-6 lg:col-span-3">
        <Suspense>
          <SearchInput wrapperClassName="mb-4 w-full lg:max-w-xs" />
          <CharacterTable />
        </Suspense>
      </Section>
      <Section
        title="Location distribution"
        description="Distribution of characters by location"
        className="col-span-6 lg:col-span-3"
      >
        <LocationChart />
      </Section>
      <AliveCharacterCounter className="col-span-6 md:col-span-2" />
      <HumanCharacterCounter className="col-span-6 md:col-span-2" />
      <LocationCounter className="col-span-6 md:col-span-2" />
    </div>
  );
}
