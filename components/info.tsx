import Link from "next/link";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Info = ({ children }: Props) => {
  const toggleInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
    var element = document.getElementById("info");
    if (element) {
      if (element.style.display === "none") element.style.display = "block";
      else element.style.display = "none";
    }
  };

  return (
    <div className="absolute h-full w-full">
      <button
        onClick={toggleInfo}
        className="button-style-shy absolute right-4 top-4"
      >
        Info
      </button>
      <div
        id="info"
        className="m-4 rounded-lg border-2 border-light bg-light bg-opacity-10 p-4"
      >
        {children}
      </div>
    </div>
  );
};

export default Info;
