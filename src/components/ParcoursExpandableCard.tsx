import type { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

type ParcoursExpandableCardProps = {
  title: string;
  subtitle: string;
  open: boolean;
  onToggle: () => void;
  toggleId: string;
  detailId: string;
  toggleButtonClassName: string;
  children: ReactNode;
};

export function ParcoursExpandableCard({
  title,
  subtitle,
  open,
  onToggle,
  toggleId,
  detailId,
  toggleButtonClassName,
  children,
}: ParcoursExpandableCardProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-terracotta-light rounded-3xl border border-cream/20 shadow-soft overflow-hidden">
        <div className="p-6 md:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-xl md:text-2xl font-serif text-cream leading-snug">{title}</h3>
              <p className="mt-2 text-sm text-cream/85">{subtitle}</p>
            </div>
            <button
              type="button"
              id={toggleId}
              aria-expanded={open}
              aria-controls={detailId}
              onClick={onToggle}
              className={toggleButtonClassName}
            >
              {open ? 'Masquer le détail' : 'Voir le détail'}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
                aria-hidden
              />
            </button>
          </div>
        </div>

        {open ? (
          <div
            id={detailId}
            role="region"
            aria-labelledby={toggleId}
            className="border-t border-cream/20 bg-terracotta-light px-4 pb-6 pt-5 md:px-6 md:pb-7"
          >
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
}
