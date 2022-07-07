import * as React from 'react';
import { useState } from 'react';
var ECurrentStage;
(function (ECurrentStage) {
    ECurrentStage[ECurrentStage["START"] = 1] = "START";
    ECurrentStage[ECurrentStage["MIDDLE"] = 2] = "MIDDLE";
    ECurrentStage[ECurrentStage["FINAL"] = 3] = "FINAL";
    ECurrentStage[ECurrentStage["REVIEW"] = 4] = "REVIEW";
})(ECurrentStage || (ECurrentStage = {}));
export default function CurrentStage() {
    const [CurrentStage, setCurrentStage] = useState(ECurrentStage.START);
    function increment(value) {
        let result = value + 1;
        setCurrentStage(result);
    }
    function decrement(value) {
        let result = value - 1;
        setCurrentStage(result);
    }
    return (React.createElement("div", null,
        React.createElement("p", null,
            "Current Stage Is: ",
            CurrentStage),
        React.createElement("div", { style: { display: 'flex', justifyContent: 'space-around' } },
            React.createElement("button", { className: "button is-primary", onClick: () => increment(CurrentStage) }, "Increment"),
            React.createElement("button", { className: "button is-primary", onClick: () => decrement(CurrentStage) }, "Decrement"))));
}
