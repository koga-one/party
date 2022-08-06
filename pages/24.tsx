import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Info, Number } from "../components";

const TwentyFour: NextPage = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

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
        <button className="button-style-shy">Settings</button>
        <button className="button-style-sad">Solution</button>
        <button className="button-style-zen">Next!</button>
      </div>
    </div>
  );
};

export default TwentyFour;
