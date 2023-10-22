interface TableHeadProps {
  headers: Set<string>;
}

const TableHead = ({ headers }: TableHeadProps) => {
  const headersList = Array.from(headers);

  return (
    <thead>
      {headersList.map((header) => {
        return (
          <tr key={header}>
            <th>{header}</th>
          </tr>
        );
      })}
    </thead>
  );
};

export { TableHead };
