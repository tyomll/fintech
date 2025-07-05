interface Props {
  color: string;
  label: string;
  onClick?: () => void;
}

const AddStockBadge: React.FC<Props> = ({ color, label, onClick }) => {
  return (
    <span
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={label}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick();
            }
          : undefined
      }
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${color} ${
        onClick ? "hover:opacity-80" : ""
      }`}
    >
      {label}
    </span>
  );
};

export default AddStockBadge;
