interface TableDataRawProps {
  text: string | number;
}

const TableDataRaw = ({ text }: TableDataRawProps) => {
  return (
    <td className="border-y-4 py-4 px-6 mx-auto">
      <span>{text}</span>
    </td>
  );
};

export { TableDataRaw };
