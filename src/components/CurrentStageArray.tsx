import * as React from 'react';
import { useState } from 'react';

export default function currentLevelArray() {
  const levelsArray = ['BEGINNER', 'INTERMEDIATE', 'HARD', 'LEGENDARY'];
  const [currentLevel, setCurrentLevel] = useState<string>('BEGINNER');

  function increment() {}

  function decrement() {}

  return (
    <div>
      <p>Current Level Is: {currentLevel}</p>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
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
