import * as React from "react";
import { useState } from "react";

export default function currentLevelArray() {
  const levelsArray = ["BEGINNER", "INTERMEDIATE", "HARD", "LEGENDARY"];
  const [currentLevel, setCurrentLevel] = useState<string>("BEGINNER");

  function increment(currentLevel: string) {
    const curr: number = levelsArray.indexOf(currentLevel);
    const incre: number = curr + 1;
    const increString: string | undefined = levelsArray.at(incre);
    if (increString == undefined) {
      console.error("Sorry, reached end of array");
    } else {
      setCurrentLevel(increString);
    }
  }

  function decrement(currentLevel: string) {
    const curr: number = levelsArray.indexOf(currentLevel);
    const decre: number = curr + 1;
    const decreString: string | undefined = levelsArray.at(decre);
    if (decreString == undefined) {
      console.error("Sorry, reached end of array");
    } else {
      setCurrentLevel(decreString);
    }
  }

  return (
    <div>
      <p>Current Level Is: {currentLevel}</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button
          className="button is-primary"
          onClick={() => increment(currentLevel)}
        >
          Increment
        </button>
        <button
          className="button is-primary"
          onClick={() => decrement(currentLevel)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
