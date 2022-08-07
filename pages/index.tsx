import type { NextPage } from "next";
import { GameCard, Layout } from "../components";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="pointer-events-none absolute z-20 grid h-full w-full place-content-center">
          <h1
            id="title"
            className="text-outline text-center text-6xl tracking-wider lg:text-9xl"
          >
            PARTY!
          </h1>
        </div>
        <div className="absolute grid h-full w-full grid-cols-1 gap-4 p-4 lg:grid-cols-2">
          <GameCard name="24" style="wavy-sad" link="24"></GameCard>
          <GameCard
            name="Resistência"
            style="rhombus-angry"
            link="resistencia"
          ></GameCard>
          <GameCard
            name="Contact"
            style="zigzag-happy"
            link="contact"
          ></GameCard>
          <GameCard
            name="Guess Me"
            style="lines-zen"
            link="guess me"
          ></GameCard>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
