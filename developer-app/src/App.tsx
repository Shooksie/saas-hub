import React, { useEffect, useRef, useState } from "react";

import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.css";
import "gridstack/dist/gridstack-extra.css";
import "./App.css";
import { GridStackElement, GridStackWidget } from "gridstack/dist/types";
import "gridstack/dist/h5/gridstack-dd-native";

function App() {
  const [items, setItems] = useState([]);

  const grid = useRef<GridStack>();
  useEffect(() => {
    grid.current = GridStack.init({
      float: true,
      cellHeight: "100px",
      minRow: 1,
      margin: 5,
      dragIn: ".sidebar .grid-stack-item", // add draggable to class
      dragInOptions: {
        revert: "invalid",
        scroll: false,
        appendTo: "body",
        // @ts-ignore
        helper: (el) => React.cloneElement(el),
      }, // clone
      acceptWidgets: true, // function example, but can also be: true | false | '.someClass' value
    });

    // GridStack.setupDragIn(".widget-area .grid-stack-item", {
    //   revert: "invalid",
    //   scroll: false,
    //   appendTo: "body",
    //   helper: "clone",
    // });

    grid.current?.load(items);
  }, []);

  // const addNewWidget = () => {
  //     const node: GridStackWidget | GridStackElement = items[items.length] || {
  //         x: Math.round(12 * Math.random()),
  //         y: Math.round(5 * Math.random()),
  //         w: Math.round(1 + 3 * Math.random()),
  //         h: Math.round(1 + 3 * Math.random()),
  //     };
  //     if ("id" in node) {
  //         node.id = node.content = String(items.length);
  //     }
  //     grid.current?.addWidget(node);
  // };
  return (
    <div className="App">
      <div className={"sidebar widget-area"} style={{ width: "30%" }}>
        <div className="grid-stack-item">
          <div className="grid-stack-item-content">
            <button
              onClick={() => {
                console.log("click");
              }}
            >
              Click Me
            </button>
          </div>
        </div>
        <div className="grid-stack-item" gs-w="2" gs-h="1" gs-max-w="3">
          <div className="grid-stack-item-content">2x1, max=3</div>
        </div>
      </div>
      <div className="grid-stack" />
    </div>
  );
}

export default App;
