interface HomeItemsSectionProps {
  title: string;
  children: React.ReactNode;
}

const HomeItemsSection = ({ title, children }: HomeItemsSectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className="grid grid-cols-4">{children}</div>
    </section>
  );
};

export { HomeItemsSection };
