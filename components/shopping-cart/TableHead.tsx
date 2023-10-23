interface TableHeadProps {
  headers: Set<string>;
}

const TableHead = ({ headers }: TableHeadProps) => {
  const headersList = Array.from(headers);

  return (
    <thead>
      <tr>
        {headersList.map((header) => {
          return (
            <th className="border-2 p-4" key={header}>
              {header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export { TableHead };
