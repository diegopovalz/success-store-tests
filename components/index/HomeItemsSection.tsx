interface HomeItemsSectionProps {
  title: string;
  children: React.ReactNode;
}

const HomeItemsSection = ({ title, children }: HomeItemsSectionProps) => {
  return (
    <section className="flex flex-col px-8">
      <h1 className="flex justify-center text-5xl font-semibold my-16">
        {title}
      </h1>
      {children}
    </section>
  );
};

export { HomeItemsSection };
