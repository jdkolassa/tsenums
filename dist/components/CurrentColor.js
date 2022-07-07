import * as React from "react";
import { useState } from "react";
const CurrentColor = () => {
    let Color;
    (function (Color) {
        Color[Color["RED"] = 1] = "RED";
        Color[Color["GREEN"] = 2] = "GREEN";
        Color[Color["BLUE"] = 3] = "BLUE";
        Color[Color["PURPLE"] = 4] = "PURPLE";
    })(Color || (Color = {}));
    const [currentColor, setCurrentColor] = useState(Color.RED);
    React.useEffect(() => {
        const picture = document.getElementById("picture");
        const pictureSrc = picture.src;
        console.log(pictureSrc);
    }, [currentColor]);
    const after = (value) => {
        setCurrentColor(value + 1);
    };
    const before = (value) => {
        setCurrentColor(value - 1);
    };
    const afterString = (currentColor) => {
        if (currentColor == Color.PURPLE) {
            throw new Error("Cannot iterate further, end of color range reached.");
        }
        else {
            setCurrentColor(currentColor + 1);
        }
    };
    const beforeString = (currentColor) => {
        if (currentColor == Color.RED) {
            throw new Error("Cannot decrement further, beginning of color range reached.");
        }
        else {
            setCurrentColor(currentColor - 1);
        }
    };
    const returnAfter = (value) => {
        return value + 1;
    };
    const returnBefore = (value) => {
        return value - 1;
    };
    const lastColor = returnAfter(Color.GREEN);
    const getColorName = (currentColor) => {
        console.log(Color[currentColor]);
        const lowname = Color[currentColor].toLowerCase();
        console.log(lowname);
        return lowname;
    };
    return (React.createElement("div", null,
        React.createElement("p", null,
            "Current Color is: ",
            currentColor),
        React.createElement("p", null,
            "Last color is: ",
            lastColor),
        React.createElement("div", { style: { display: "flex", justifyContent: "space-around" } },
            React.createElement("button", { className: "button is-primary", onClick: () => beforeString(currentColor) }, "Before"),
            React.createElement("button", { className: "button is-primary", onClick: () => afterString(currentColor) }, "After")),
        React.createElement("br", null),
        React.createElement("div", { className: "is-flex is-justify-content-center" },
            React.createElement("figure", { className: "image" },
                React.createElement("img", { id: "picture", src: "../assets/" + `${getColorName(currentColor)}` + "_flowers.jpg" })))));
};
export default CurrentColor;
