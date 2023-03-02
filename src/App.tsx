import React from "react";
import Card from "./Card";
import Data from "./Data";
import card from "./Card";
import TemporaryDrawer from "./expense";
import { FitScreen } from "@mui/icons-material";

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
        price={value.price}
      />
    );
  });

  const [items, setItems] = React.useState(card);

  function handleSmall() {
    {
      setItems(
        Data.filter((person) => person.size == "S").map((filteredPerson) => {
          return (
            <Card
              hoverImg={filteredPerson.hoverImg}
              src={filteredPerson.src}
              category={filteredPerson.category}
              size={filteredPerson.size}
              description={filteredPerson.description}
              rating={filteredPerson.rating}
              price={filteredPerson.price}
            />
          );
        })
      );
    }
  }
  function handleMedium() {
    {
      setItems(
        Data.filter((person) => person.size == "M").map((filteredPerson) => {
          return (
            <Card
              hoverImg={filteredPerson.hoverImg}
              src={filteredPerson.src}
              category={filteredPerson.category}
              size={filteredPerson.size}
              description={filteredPerson.description}
              rating={filteredPerson.rating}
              price={filteredPerson.price}
            />
          );
        })
      );
    }
  }
  function handleLarge() {
    {
      setItems(
        Data.filter((person) => person.size == "L").map((filteredPerson) => {
          return (
            <Card
              hoverImg={filteredPerson.hoverImg}
              src={filteredPerson.src}
              category={filteredPerson.category}
              size={filteredPerson.size}
              description={filteredPerson.description}
              rating={filteredPerson.rating}
              price={filteredPerson.price}
            />
          );
        })
      );
    }
  }

  function handleExtraLarge() {
    {
      setItems(
        Data.filter((person) => person.size == "XL").map((filteredPerson) => {
          return (
            <Card
              hoverImg={filteredPerson.hoverImg}
              src={filteredPerson.src}
              category={filteredPerson.category}
              size={filteredPerson.size}
              description={filteredPerson.description}
              rating={filteredPerson.rating}
              price={filteredPerson.price}
            />
          );
        })
      );
    }
  }

  function handleAllSizes() {
    setItems(
      Data.map((value) => {
        return (
          <Card
            src={value.src}
            hoverImg={value.hoverImg}
            description={value.description}
            category={value.category}
            rating={value.rating}
            size={value.size}
            price={value.price}
          />
        );
      })
    );
  }

  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col justify-center items-center gap-10 mt-20">
        <h1 className="text-7xl font-bold">Welcome!</h1>
        <div className="flex gap-2">
          <button
            className="bg-white p-3 text-black text-lg font-bold rounded-3xl"
            onClick={handleSmall}
          >
            S
          </button>
          <button
            className="bg-white p-3 text-black text-lg font-bold rounded-3xl"
            onClick={handleMedium}
          >
            M
          </button>
          <button
            className="bg-white p-3 text-black text-lg font-bold rounded-3xl"
            onClick={handleLarge}
          >
            L
          </button>
          <button
            className="bg-white p-3 text-black text-lg font-bold rounded-3xl"
            onClick={handleExtraLarge}
          >
            XL
          </button>
          <button
            className="bg-white p-3 text-black text-lg font-bold rounded-3xl uppercase"
            onClick={handleAllSizes}
          >
            All Sizes
          </button>
        </div>
        <div className="grid grid-cols-4 justify-items-center">{items}</div>;
      </div>
      <TemporaryDrawer />
    </div>
  );
}
