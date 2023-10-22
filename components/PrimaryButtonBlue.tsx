interface PrimaryButtonProps {
  text: string;
  className?: string;
  backgroundColor: "cyan-600" | "white";
}

const PrimaryButton = ({
  text,
  className,
  backgroundColor,
}: PrimaryButtonProps) => {
  const textColor =
    backgroundColor === "cyan-600" ? "text-white" : "text-cyan-600";

  let classes = `${textColor} font-semibold bg-${backgroundColor} rounded-sm p-2 cursor-pointer border-2 border-cyan-600`;
  if (className) classes += ` ${className}`;

  return <button className={classes}>{text}</button>;
};

export { PrimaryButton };
