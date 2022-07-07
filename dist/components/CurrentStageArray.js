import * as React from 'react';
import { useState } from 'react';
export default function currentLevelArray() {
    const levelsArray = ['BEGINNER', 'INTERMEDIATE', 'HARD', 'LEGENDARY'];
    const [currentLevel, setCurrentLevel] = useState('BEGINNER');
    function increment() { }
    function decrement() { }
    return (React.createElement("div", null,
        React.createElement("p", null,
            "Current Level Is: ",
            currentLevel),
        React.createElement("div", { style: { display: 'flex', justifyContent: 'space-around' } },
            React.createElement("button", { className: "button is-primary", onClick: () => increment(currentLevel) }, "Increment"),
            React.createElement("button", { className: "button is-primary", onClick: () => decrement(currentLevel) }, "Decrement"))));
}
