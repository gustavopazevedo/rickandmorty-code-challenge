import { Loader2 } from 'lucide-react';

type LoaderProps = {
  message?: string;
};
const Loader = ({ message = 'Loading...' }: LoaderProps) => {
  return (
    <div className="flex items-center gap-2">
      <Loader2 className="text-muted-foreground h-5 w-5 animate-spin" />
      {message && <span className="text-muted-foreground">{message}</span>}
    </div>
  );
};

export default Loader;
