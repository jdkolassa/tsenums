import * as React from "react";
import { useState } from "react";

enum ECurrentStage {
  "START" = 1,
  "MIDDLE" = 2,
  "FINAL" = 3,
  "REVIEW" = 4,
}

export default function CurrentStage() {
  const [CurrentStage, setCurrentStage] = useState<ECurrentStage>(
    ECurrentStage.START
  );

  /* function increment(value: ECurrentStage) {
    let stageName = ECurrentStage[value];
    console.log("stageName: ", stageName);
    let result = value + 1;
    setCurrentStage(result);
  }

  function decrement(value: ECurrentStage) {
    let result = value - 1;
    setCurrentStage(result);
  } */

  function action(value: ECurrentStage, action: "increment" | "decrement") {
    let currstageName = ECurrentStage[value];
    console.log("currstageName ", currstageName);
    switch (action) {
      case "increment":
        value++;
        if (value > 4) {
          return TypeError("currentStage is out of bounds");
        } else {
          setCurrentStage(value);
        }
        break;
      case "decrement":
        value--;
        if (value < 1) {
          return TypeError("currentStage is out of bounds");
        } else {
          setCurrentStage(value);
        }
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <p>Current Stage Is: {ECurrentStage[CurrentStage]}</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button
          className="button is-primary"
          onClick={() => action(CurrentStage, "increment")}
        >
          Increment
        </button>
        <button
          className="button is-primary"
          onClick={() => action(CurrentStage, "decrement")}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
