interface FormRowProps {
  name: string;
  type: string;
}

const capitalizeWord = (word: string) => {
  return word[0].toUpperCase() + word.slice(1);
};

const FormRow = ({ name, type }: FormRowProps) => {
  return (
    <>
      <label htmlFor={name} className="text-gray-500">{`${capitalizeWord(
        name
      )}:`}</label>
      <input
        type={type}
        id={name}
        name={name}
        required
        className="border border-gray-500 rounded-sm h-10"
      />
    </>
  );
};

export { FormRow };
