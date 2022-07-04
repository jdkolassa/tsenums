import * as React from 'react';
import { useState } from 'react';
import CurrentStage from './components/CurrentStage';
import CurrentNumber from './components/CurrentNumber';
import CurrentColor from './components/CurrentColor';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Typescript Enum Tests</h1>
      <CurrentStage />
      <hr />
      <CurrentNumber />
      <hr />
      <CurrentColor />
    </div>
  );
}
