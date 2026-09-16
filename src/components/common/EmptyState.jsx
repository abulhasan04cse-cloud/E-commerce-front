import { Link } from 'react-router-dom';

export default function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  actionTo,
  onAction,
  className = '',
}) {
  return (
    <div className={`flex flex-col items-center justify-center px-6 py-16 text-center ${className}`}>
      {Icon && (
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-surface-100">
          <Icon className="h-10 w-10 text-surface-400" strokeWidth={1.5} />
        </div>
      )}
      <h3 className="mb-2 text-xl font-bold text-surface-800">{title}</h3>
      {description && (
        <p className="mb-6 max-w-sm text-sm text-surface-500">{description}</p>
      )}
      {actionLabel && (actionTo || onAction) && (
        actionTo ? (
          <Link
            to={actionTo}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary-700 px-6 text-sm font-semibold text-white transition-all hover:bg-primary-800 active:scale-[0.98]"
          >
            {actionLabel}
          </Link>
        ) : (
          <button
            onClick={onAction}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary-700 px-6 text-sm font-semibold text-white transition-all hover:bg-primary-800 active:scale-[0.98]"
          >
            {actionLabel}
          </button>
        )
      )}
    </div>
  );
}
