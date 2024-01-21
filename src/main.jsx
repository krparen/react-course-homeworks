/* eslint-disable react/no-children-prop */
import ReactDOM from "react-dom/client";
import { mocks } from "./constants/mock";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <button
      id={"button_1" + 1}
      onClick={() => console.log("Hello")}
      onMouseEnter={() => console.log("Hello, Students!")}
      onMouseLeave={() => console.log("Bye, Students!")}
    >
      <span>Click me!</span>
    </button>
    <button>
      <span>Click me!</span>
    </button>
    <button>
      <span>Click me!</span>
    </button>

    <div>
      <div>
        <p>Name: {mocks[0].name}</p>
      </div>
      <div>
        <p>Name: {mocks[1].name}</p>
      </div>
    </div>
  </div>
);

// root.render(
//   React.createElement("div", {
//     children: [
//       React.createElement("button", {
//         children: React.createElement("span", {
//           children: "Click Me!",
//         }),
//         onClick: () => console.log("Hello, Students!"),
//         onMouseEnter: () => console.log("Hello, Students!"),
//         onMouseLeave: () => console.log("Bye, Students!"),
//       }),
//       React.createElement("button", {
//         children: React.createElement("span", { children: "Click Me!" }),
//       }),
//       React.createElement("button", {
//         children: React.createElement("span", { children: "Click Me!" }),
//       }),
//     ],
//   })
// );