import * as React from "react";
import { useState } from "react";

const CurrentColor = () => {
  enum Color {
    RED = 1,
    GREEN = 2,
    BLUE = 3,
    PURPLE = 4,
  }

  const [currentColor, setCurrentColor] = useState<Color>(Color.RED);

  React.useEffect(() => {
    const picture = document.getElementById("picture")! as HTMLImageElement;
    const pictureSrc = picture.src;
    console.log(pictureSrc);
  }, [currentColor]);

  const after = (value: Color) => {
    setCurrentColor(value + 1);
  };

  const before = (value: Color) => {
    setCurrentColor(value - 1);
  };

  const afterString = (currentColor: Color) => {
    if (currentColor == Color.PURPLE) {
      throw new Error("Cannot iterate further, end of color range reached.");
    } else {
      setCurrentColor(currentColor + 1);
    }
  };

  const beforeString = (currentColor: Color) => {
    if (currentColor == Color.RED) {
      throw new Error(
        "Cannot decrement further, beginning of color range reached."
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

  const getColorName = (currentColor: Color) => {
    console.log(Color[currentColor]);
    const lowname = Color[currentColor].toLowerCase();
    console.log(lowname);
    return lowname;
  };

  return (
    <div>
      <p>Current Color is: {currentColor}</p>
      <p>Last color is: {lastColor}</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
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
      <br />
      <div className="is-flex is-justify-content-center">
        <figure className="image">
          <img
            id="picture"
            src={
              "../assets/" + `${getColorName(currentColor)}` + "_flowers.jpg"
            }
          />
        </figure>
      </div>
    </div>
  );
};

export default CurrentColor;
