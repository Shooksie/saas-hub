import React, { PropsWithChildren, useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import RGL, { WidthProvider, Layout } from "react-grid-layout";
import "./App.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Button } from "./Grid/Components/button";
import { Input } from "./Grid/Components/input";
import { Title } from "./Grid/Components/Title";
import { Grid } from "./Grid/Grid";
const GridLayout = WidthProvider(RGL);

const layout: Layout[] = [];

const EditableComponent = ({
  children,
}: PropsWithChildren<{ options?: any }>) => {
  return <div className="flex-wrapper">{children}</div>;
};

const Component = () => {
  const [clickActive, setClickActive] = useState(false);
  return (
    <div
      className="flex-wrapper"
      onMouseEnter={() => {
        setClickActive(true);
      }}
      onClick={(e) => {
        e.stopPropagation();
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
  Button: {
    key: "Button",
    Component: Button,
  },
  Input: {
    key: "Input",
    Component: Input,
  },
  Title: {
    key: "Title",
    Component: Title,
  },
};

const GridItemsList = [
  GridItemsMap.Card,
  GridItemsMap.Table,
  GridItemsMap.Form,
  GridItemsMap.Button,
  GridItemsMap.Input,
  GridItemsMap.Title,
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
  const [draggingType, setDraggingType] = useState<string>();

  console.log(items);

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
                  setDraggingType(item.key);
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
          <Grid items={items} setItems={setItems} draggingType={draggingType}>
            {items.map((item) => {
              return <div key={item.i}>{GridItemFactory(item.i)}</div>;
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default App;
