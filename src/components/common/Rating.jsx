import { Star } from 'lucide-react';

export default function Rating({ value, count, size = 'sm', showCount = true }) {
  const sizes = {
    xs: { star: 12, text: 'text-xs' },
    sm: { star: 14, text: 'text-xs' },
    md: { star: 16, text: 'text-sm' },
    lg: { star: 20, text: 'text-base' },
  };
  const s = sizes[size];

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((n) => {
          const filled = value >= n;
          const half = !filled && value >= n - 0.5;
          return (
            <Star
              key={n}
              size={s.star}
              className={
                filled
                  ? 'fill-warning-500 text-warning-500'
                  : half
                    ? 'fill-warning-300 text-warning-400'
                    : 'fill-surface-200 text-surface-300'
              }
            />
          );
        })}
      </div>
      <span className={`font-semibold text-surface-700 ${s.text}`}>{value.toFixed(1)}</span>
      {showCount && count != null && (
        <span className={`text-surface-400 ${s.text}`}>({count.toLocaleString()})</span>
      )}
    </div>
  );
}
