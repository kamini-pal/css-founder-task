interface SectionHeadingProps {
  subtitle: string;
  title: string;
  highlightedWord?: string;
  description?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  subtitle,
  title,
  highlightedWord,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!highlightedWord) {
      return <span>{title}</span>;
    }

    const parts = title.split(highlightedWord);
    return (
      <>
        {parts[0]}
        <span className="text-accent">{highlightedWord}</span>
        {parts[1] ?? ''}
      </>
    );
  };

  return (
    <div className={`mb-10 md:mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="section-label">{subtitle}</span>
      <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-heading leading-tight">
        {renderTitle()}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-text-light text-sm sm:text-base leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
