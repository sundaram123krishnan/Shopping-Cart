import React from "react";
import Card from "./Card";
import Data from "./Data";

export default function App() {
  const card = Data.map((value) => {
    return <Card src={value.src} hoverImg={value.hoverImg} />;
  });
  return <div className="grid grid-cols-4 justify-items-center">{card}</div>;
}
