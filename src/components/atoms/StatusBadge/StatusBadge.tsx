type StatusBadgeProps = {
  status: string;
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const getStatusClassName = (status: string) => {
    return (
      {
        alive: 'bg-green-100 text-green-800',
        dead: 'bg-red-100 text-red-800',
      }[status.toLowerCase()] || 'bg-gray-100 text-gray-800'
    );
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClassName(status)}`}
    >
      {status.toUpperCase()}
    </span>
  );
};

export default StatusBadge;
