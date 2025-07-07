'use client';

import { useMemo } from 'react';
import { Cell, PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts';

import { CustomTooltipChart, Loader } from '@/components/molecules';
import { useLocations } from '@/hooks';
import { getColorForKey } from '@/utils';

const LocationChart = () => {
  const { error, locations, loading } = useLocations({
    getAll: true,
    page: 1,
  });

  const groupedLocations = useMemo(() => {
    const groups: Record<
      string,
      { names: string[]; count: number; logic?: string }
    > = {
      lessThan10: { names: [], count: 0, logic: '<10 residents' },
    };

    locations.forEach((location) => {
      if (!location) return;

      const count = location.residents.length;

      if (count < 10) {
        groups.lessThan10.names.push(location.name as string);
        groups.lessThan10.count += count;
      } else {
        const key = count.toString();

        if (!groups[key]) {
          groups[key] = { names: [], count };
        }

        groups[key].names.push(location.name as string);
      }
    });

    return Object.values(groups).map((group) => ({
      count: group.count,
      logic: group?.logic,
      names: group.names,
    }));
  }, [locations]);

  if (loading) {
    return <Loader message="Loading locations chart..." />;
  }

  if (error && !loading) {
    return (
      <div>
        <p className="text-red-500">
          Error loading locations chart. Please try again.
        </p>
      </div>
    );
  }

  return (
    <div className="h-[400px] w-full lg:h-[600px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={groupedLocations}
            dataKey="count"
            nameKey="names"
            cx="50%"
            cy="50%"
            label
          >
            {groupedLocations.map((location) => (
              <Cell
                key={location.names.join(', ')}
                fill={getColorForKey(location.names.join(', ') as string)}
              />
            ))}
          </Pie>
          <Tooltip
            active={true}
            wrapperStyle={{ pointerEvents: 'auto', zIndex: 1000 }}
            content={<CustomTooltipChart title="Locations" />}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LocationChart;
