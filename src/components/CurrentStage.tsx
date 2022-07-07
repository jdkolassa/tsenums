import * as React from 'react';
import { useState } from 'react';

enum ECurrentStage {
  'START' = 1,
  'MIDDLE' = 2,
  'FINAL' = 3,
  'REVIEW' = 4,
}

export default function CurrentStage() {
  const [CurrentStage, setCurrentStage] = useState<ECurrentStage>(
    ECurrentStage.START
  );

  function increment(value: ECurrentStage) {
    let result = value + 1;
    setCurrentStage(result);
  }

  function decrement(value: ECurrentStage) {
    let result = value - 1;
    setCurrentStage(result);
  }

  return (
    <div>
      <p>Current Stage Is: {CurrentStage}</p>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button
          className="button is-primary"
          onClick={() => increment(CurrentStage)}
        >
          Increment
        </button>
        <button
          className="button is-primary"
          onClick={() => decrement(CurrentStage)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
