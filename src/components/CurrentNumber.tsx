import * as React from "react";
import { useState } from "react";

export default function CurrentNumber() {
  const numbers = [1, 2, 3, 4, 5] as const;
  type OurNumber = typeof numbers[number];
  const [currentNumber, setCurrentNumber] = useState<OurNumber>(numbers[0]);
  console.log("currentNumber = ", currentNumber);

  const min = numbers[0];
  const max = numbers[numbers.length - 1];

  function plusNum(currentNumber: OurNumber) {
    if (currentNumber < max) {
      console.log("currentNumber's value is: ", currentNumber);
      let plusNumber = Number(currentNumber);
      plusNumber = plusNumber + 1;
      const newNumber: OurNumber = plusNumber as OurNumber;
      setCurrentNumber(newNumber);
    } else {
      console.error("Max number already reached");
    }
  }

  function minusNum(currentNumber: OurNumber) {
    if (currentNumber > min) {
      let minusNumber = Number(currentNumber);
      minusNumber = minusNumber - 1;
      const newNumber: OurNumber = minusNumber as OurNumber;
      setCurrentNumber(newNumber);
    } else {
      console.error("Min number already reached");
    }
  }

  return (
    <div>
      <p>Current Number is: {currentNumber}</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button
          className="button is-primary"
          onClick={() => plusNum(currentNumber)}
        >
          Increment
        </button>
        <button
          className="button is-primary"
          onClick={() => minusNum(currentNumber)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
