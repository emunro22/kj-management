import Reveal from './Reveal';

type Props = {
  eyebrow?: string;
  title: string;
  align?: 'center' | 'left';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  align = 'center',
  className = '',
}: Props) {
  return (
    <Reveal className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="section-title text-ink">{title}</h2>
    </Reveal>
  );
}
