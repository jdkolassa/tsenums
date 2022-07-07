import * as React from 'react';
import CurrentStage from './components/CurrentStage';
import CurrentNumber from './components/CurrentNumber';
import CurrentColor from './components/CurrentColor';
import './style.css';
export default function App() {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Typescript Enum Tests"),
        React.createElement(CurrentStage, null),
        React.createElement("hr", null),
        React.createElement(CurrentNumber, null),
        React.createElement("hr", null),
        React.createElement(CurrentColor, null)));
}
