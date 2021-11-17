import React, { PropsWithChildren } from "react";
import RGL, { WidthProvider, Layout } from "react-grid-layout";
import { v4 as uuidv4 } from "uuid";
const GridLayout = WidthProvider(RGL);

export const Grid = ({
  items,
  setItems,
  draggingType,
  children,
}: PropsWithChildren<{
  items: any[];
  setItems: any;
  draggingType?: string;
}>) => {
  const onDrop = (layout: any, layoutItem: any, _event: any) => {
    console.log(layout, layoutItem, _event);

    if (draggingType) {
      setItems((items: any) => {
        return [...items, { ...layoutItem, i: `${draggingType}_${uuidv4()}` }];
      });
    }
  };
  return (
    <GridLayout
      droppingItem={{ i: "__droppable__", w: 4, h: 6 }}
      className="layout"
      layout={items}
      cols={12}
      onDrop={onDrop}
      rowHeight={30}
      // droppingItem={{ i: uuidv4(), w: 6, h: 10 }}
      onLayoutChange={(newL) => {
        if (!newL.find((item) => item.i === "__droppable__")) {
          setItems(newL);
        }
      }}
      isDraggable
      isDroppable
    >
      {children}
    </GridLayout>
  );
};
