import React from "react";
import Card from "./Card";
import Data from "./Data";

export default function App() {
  const card = Data.map((value) => {
    return (
      <Card
        src={value.src}
        hoverImg={value.hoverImg}
        description={value.description}
        category={value.category}
        rating={value.rating}
        size={value.size}
      />
    );
  });

  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-20">
      <h1 className="text-7xl font-bold">Welcome!</h1>
      <div className="flex gap-2">
        <button className="bg-white p-3 text-black text-lg font-bold rounded-3xl">
          S
        </button>
        <button className="bg-white p-3 text-black text-lg font-bold rounded-3xl">
          M
        </button>
        <button className="bg-white p-3 text-black text-lg font-bold rounded-3xl">
          L
        </button>
        <button className="bg-white p-3 text-black text-lg font-bold rounded-3xl">
          XL
        </button>
      </div>
      <div className="grid grid-cols-4 justify-items-center">{card}</div>;
    </div>
  );
}
