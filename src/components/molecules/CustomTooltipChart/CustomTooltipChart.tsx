import { TooltipProps } from 'recharts';

type CustomTooltipChartProps = {
  payload?: {
    name: string;
    value: number;
    payload?: {
      names: string;
      value: number;
      logic?: string;
    };
  }[];
  title?: string;
} & TooltipProps<number, string>;

const CustomTooltipChart = ({
  active,
  payload,
  title,
}: CustomTooltipChartProps) => {
  if (active && payload && payload.length) {
    const logic = payload[0]?.payload?.logic;

    return (
      <div className="max-h-60 max-w-[300px] overflow-y-auto rounded border border-gray-300 bg-white p-2 text-sm shadow">
        {title && (
          <h3 className="font-bold">
            {title} {logic && `(${logic})`}
          </h3>
        )}
        {payload.map((entry, index) => {
          const name = entry?.payload?.names || entry?.name || 'Unknown';

          return (
            <div key={`item-${index}`} className="text-gray-800">
              {Array.isArray(name) ? (
                name.map((name, index) => <p key={`name-${index}`}>- {name}</p>)
              ) : (
                <p>{`${entry.name}: ${entry.value} residents`}</p>
              )}
              {!logic && (
                <p key={`value-${index}`} className="font-bold">
                  {entry.value} residents
                </p>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return null;
};

export default CustomTooltipChart;
