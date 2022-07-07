import * as React from "react";
import { useState } from "react";
export default function CurrentNumber() {
    const numbers = [1, 2, 3, 4, 5];
    const [currentNumber, setCurrentNumber] = useState(numbers[0]);
    console.log("currentNumber = ", currentNumber);
    const min = numbers[0];
    const max = numbers[numbers.length - 1];
    function plusNum(currentNumber) {
        if (currentNumber < max) {
            setCurrentNumber(currentNumber + 1);
        }
        else {
            console.error("Max number already reached");
        }
    }
    function minusNum(currentNumber) {
        if (currentNumber > min) {
            setCurrentNumber(currentNumber - 1);
        }
        else {
            console.error("Min number already reached");
        }
    }
    return (React.createElement("div", null,
        React.createElement("p", null,
            "Current Number is: ",
            currentNumber),
        React.createElement("div", { style: { display: "flex", justifyContent: "space-around" } },
            React.createElement("button", { className: "button is-primary", onClick: () => plusNum(currentNumber) }, "Increment"),
            React.createElement("button", { className: "button is-primary", onClick: () => minusNum(currentNumber) }, "Decrement"))));
}
