import { HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { Loader } from '@/components/molecules';

type InfoCardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  loading?: boolean;
  loadingMessage?: string;
  text: string;
  title: string;
};

const InfoCard = ({
  className,
  loading,
  loadingMessage,
  text,
  title,
}: InfoCardProps) => {
  return (
    <div
      className={twMerge(
        'bg-card text-card-foreground pad w-full rounded-lg border border-gray-300 p-4 lg:p-6',
        className
      )}
    >
      <h3 className="mb-2 text-lg font-bold lg:text-xl">{title}</h3>
      {loading ? (
        <Loader message={loadingMessage} />
      ) : (
        <p className="text-xl lg:text-2xl">{text}</p>
      )}
    </div>
  );
};

export default InfoCard;
