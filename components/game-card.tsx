import Link from "next/link";

type Props = {
  name: string;
  style: string;
  link: string;
};

const GameCard = ({ name, style, link }: Props) => {
  return (
    <Link href={link}>
      <div
        className={`grid cursor-pointer place-content-center rounded-xl transition-all active:scale-90 ${style}`}
      >
        <h2 className="pointer-events-none break-words text-4xl text-neutral dark:text-shy lg:text-8xl">
          {name}
        </h2>
      </div>
    </Link>
  );
};

export default GameCard;
