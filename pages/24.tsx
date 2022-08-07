import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Info, Layout, Number } from "../components";

const TwentyFour: NextPage = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const nextGame = () => {
    setNumbers([
      Math.ceil(Math.random() * 13),
      Math.ceil(Math.random() * 13),
      Math.ceil(Math.random() * 13),
      Math.ceil(Math.random() * 13),
    ]);
  };

  const showSolution = () => {
    // Calculate all only + and - cases here
    /* Two-Pair cases are:
    (a * b) + (c * d) -> 3 cases
    (a * b) - (c * d) -> 6 cases
    (a / b) + (c / d) -> 12 cases
    (a / b) - (c / d) -> 24 cases
    (a * b) + (c / d) -> 
    */
  };

  // Call this everytime we press the next
  useEffect(() => {
    setNumbers([
      Math.ceil(Math.random() * 13),
      Math.ceil(Math.random() * 13),
      Math.ceil(Math.random() * 13),
      Math.ceil(Math.random() * 13),
    ]);
  }, []);

  return (
    <Layout title="24">
      <div className="h-screen">
        <Info>
          <h2>How to Play</h2>
          <p>Hey there!</p>
        </Info>
        <div className="grid h-full grid-cols-2 grid-rows-2">
          <Number value={numbers[0]}></Number>
          <Number value={numbers[1]}></Number>
          <Number value={numbers[2]}></Number>
          <Number value={numbers[3]}></Number>
        </div>
        <div className="absolute right-1/2 bottom-1/2 flex translate-x-1/2 translate-y-1/2 gap-4">
          <button onClick={showSolution} className="button-style-angry">
            Solution
          </button>
          <button onClick={nextGame} className="button-style-zen">
            Next!
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default TwentyFour;
