type Props = {
  value: number;
};

const Number = ({ value }: Props) => {
  return (
    <div className="grid place-content-center font-marker text-9xl">
      <p className="border-b-4">{value}</p>
    </div>
  );
};

export default Number;
