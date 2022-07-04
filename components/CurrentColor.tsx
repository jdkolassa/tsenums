import * as React from 'react';
import { useState } from 'react';

const CurrentColor = () => {
  enum Color {
    RED = 1,
    GREEN = 2,
    BLUE = 3,
    PURPLE = 4,
  }

  const [currentColor, setCurrentColor] = useState<Color>(Color.RED);

  const after = (value: Color) => {
    setCurrentColor(value + 1);
  };

  const before = (value: Color) => {
    setCurrentColor(value - 1);
  };

  const afterString = (currentColor: Color) => {
    if (currentColor == Color.PURPLE) {
      throw new Error('Cannot iterate further, end of color range reached.');
    } else {
      setCurrentColor(currentColor + 1);
    }
  };

  const beforeString = (currentColor: Color) => {
    if (currentColor == Color.RED) {
      throw new Error(
        'Cannot decrement further, beginning of color range reached.'
      );
    } else {
      setCurrentColor(currentColor - 1);
    }
  };

  const returnAfter = (value: Color): Color => {
    return value + 1;
  };

  const returnBefore = (value: Color): Color => {
    return value - 1;
  };

  const lastColor: Color = returnAfter(Color.GREEN);

  return (
    <div>
      <p>Current Color is: {currentColor}</p>
      <p>Last color is: {lastColor}</p>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button
          className="button is-primary"
          onClick={() => beforeString(currentColor)}
        >
          Before
        </button>
        <button
          className="button is-primary"
          onClick={() => afterString(currentColor)}
        >
          After
        </button>
      </div>
    </div>
  );
};

export default CurrentColor;
