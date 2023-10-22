interface TableDataRawProps {
  text: string | number;
}

const TableDataRaw = ({ text }: TableDataRawProps) => {
  return (
    <td>
      <span>{text}</span>
    </td>
  );
};

export { TableDataRaw };
