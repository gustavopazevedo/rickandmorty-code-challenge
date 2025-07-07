import { HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  description?: string;
  title: string;
};

const Section = ({ children, className, description, title }: SectionProps) => {
  return (
    <section
      className={twMerge(
        'bg-card text-card-foreground rounded-lg border border-gray-300',
        className
      )}
    >
      <header className="p-4 lg:p-6">
        <h2 className="text-xl font-bold lg:text-2xl">{title}</h2>
        <p>{description}</p>
      </header>
      <div className="px-4 pb-4 lg:px-6 lg:pb-6">{children}</div>
    </section>
  );
};

export default Section;
