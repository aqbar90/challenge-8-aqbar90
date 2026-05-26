import type { SectionProps } from '../../types';

const Section = ({ id, children, className = '' }: SectionProps) => {
  return (
    <section
      id={id}
      className={`
        py-16
        md:py-20
        lg:py-24
        ${className}
      `}
    >
      {children}
    </section>
  );
};

export default Section;
