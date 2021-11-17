import React, { useEffect, useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import RGL, { WidthProvider, Layout } from "react-grid-layout";
import "./App.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const GridLayout = WidthProvider(RGL);

const layout: Layout[] = [];

const Component = () => {
  const [clickActive, setClickActive] = useState(false);
  return (
    <div
      className="flex-wrapper"
      onMouseEnter={() => {
        setClickActive(true);
      }}
      onClick={() => {
        setClickActive(true);
      }}
    >
      <div
        className="card col"
        style={{ borderColor: clickActive ? "red" : "black" }}
      >
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="#"
            className="card-link"
            onClick={() => console.log("click")}
          >
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <div className="flex-wrapper">
      <div className="card col">
        <div className="card-body">
          <div className="row">
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
        />
      </div>
    </div>
  );
};

type FactoryItem = {
  key: string;
  Component: (...args: any[]) => JSX.Element;
};

const GridItemsMap: { [key: string]: FactoryItem } = {
  Card: {
    key: "Card",
    Component: Component,
  },
  Table: {
    key: "Table",
    Component: Table,
  },
  Form: {
    key: "Form",
    Component: Form,
  },
};

const GridItemsList = [
  GridItemsMap.Card,
  GridItemsMap.Table,
  GridItemsMap.Form,
];

const GridItemFactory = (id: string) => {
  const [type] = id.split("_");
  if (GridItemsMap[type]) {
    const { Component } = GridItemsMap[type];
    return <Component />;
  }
  if (type === "Card") {
    return <Component />;
  } else if (type === "Table") {
    return <Table />;
  }

  return <div>{id}</div>;
};
function App() {
  const [items, setItems] = useState<Layout[]>(layout);

  console.log(items);
  const draggingType = useRef<string>();

  const onDrop = (layout: any, layoutItem: any, _event: any) => {
    console.log(layout, layoutItem, _event);

    if (draggingType.current) {
      setItems((items) => {
        return [
          ...items,
          { ...layoutItem, i: `${draggingType.current}_${uuidv4()}` },
        ];
      });
      draggingType.current = undefined;
    }
  };

  return (
    <div className="App d-flex">
      <div className="col d-flex d-flex-column">
        <div className={"sidebar widget-area col-3"}>
          {GridItemsList.map((item) => {
            const Item = item?.Component;
            return (
              <div
                className="droppable-element"
                draggable={true}
                unselectable="on"
                // this is a hack for firefox
                // Firefox requires some kind of initialization
                // which we can do by adding this attribute
                // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
                onDragStart={(e) => {
                  e.dataTransfer.setData("text/plain", "Card");
                  draggingType.current = item.key;
                }}
              >
                <div>
                  <Item />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-9 bg-light">
          <GridLayout
            droppingItem={{ i: "__droppable__", w: 4, h: 6 }}
            className="layout"
            layout={items}
            cols={12}
            onDrop={onDrop}
            rowHeight={30}
            // droppingItem={{ i: uuidv4(), w: 6, h: 10 }}
            onLayoutChange={(newL) => {
              console.log(newL);
              if (!newL.find((item) => item.i === "__droppable__")) {
                setItems(newL);
              }
            }}
            // onDropDragOver={(e) => {
            //   console.log(e);
            //   return { w: 5, h: 5 };
            // }}
            isDraggable
            isDroppable
          >
            {items.map((item) => {
              return <div key={item.i}>{GridItemFactory(item.i)}</div>;
            })}
          </GridLayout>
        </div>
      </div>
    </div>
  );
}

export default App;
