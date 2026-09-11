'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { CalendarCheck, ChevronDown } from 'lucide-react';
import { team } from '@/data/team';

type Props = {
  /** Button label. */
  label?: string;
  /** Button classes, so each placement keeps the look it already had. */
  className?: string;
  /** Which edge of the button the panel lines up with. */
  align?: 'left' | 'center';
};

/**
 * The generic "Schedule a Free Consultation" button. Instead of dropping the
 * visitor straight into one calendar, it opens a small chooser so they pick
 * Kieran or Elaine first.
 */
export default function BookCta({
  label = 'Schedule a Free Consultation',
  className = 'btn-brand',
  align = 'center',
}: Props) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="true"
        className={className}
      >
        <CalendarCheck size={20} aria-hidden="true" />
        {label}
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        id={panelId}
        hidden={!open}
        className={`absolute top-[calc(100%+10px)] z-50 w-[min(22rem,calc(100vw-2.5rem))] border border-black/10 bg-white p-2 text-left shadow-[0_18px_44px_rgba(0,0,0,0.18)] ${
          align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'
        }`}
      >
        <p className="px-3 pb-2 pt-3 font-display text-xs font-bold uppercase tracking-[0.08em] text-ink-muted">
          Who would you like to speak to?
        </p>

        {team.map((person) => (
          <a
            key={person.name}
            href={person.calendly}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 border border-transparent px-3 py-3 transition-colors ${person.theme.hover}`}
          >
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
              <Image src={person.avatar} alt="" fill sizes="44px" className="object-cover" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[15px] font-bold text-ink">
                Book with {person.firstName}
              </span>
              <span className="block truncate text-[13px] text-ink-muted">{person.role}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
