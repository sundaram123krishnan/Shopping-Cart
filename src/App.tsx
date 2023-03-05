import React from "react";
import Card from "./Card";
import Data from "./Data";
import card from "./Card";

export default function App() {
  const [arr, setArr] = React.useState<string[]>([]);

  const [count, setCount] = React.useState(0);
  const [idx, setIdx] = React.useState(0);
  function handleCallBack(childData: string) {
    // setArr([...arr, childData]);
    setCount(count + 1);
  }

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
        parentCallback={handleCallBack}
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
              parentCallback={handleCallBack}
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
              parentCallback={handleCallBack}
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
              parentCallback={handleCallBack}
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
              parentCallback={handleCallBack}
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
            parentCallback={handleCallBack}
          />
        );
      })
    );
  }

  console.log(count);
  return (
    <div>
      <div className="flex justify-evenly">
        <div className="flex flex-col justify-center items-center gap-10 mt-20">
          <h1 className="text-7xl font-bold uppercase">Welcome</h1>
          <h1 className="text-2xl font-bold">What is ur outfilt's size?</h1>
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
      </div>
    </div>
  );
}
