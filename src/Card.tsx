import React, { MouseEvent } from "react";
import icon from "./icon.png";

export interface card {
  hoverImg: string;
  src: string;
  category: string;
  size: string;
  description: string;
  rating: string;
  price: string;
}

export default function Card(props: card) {
  function mouseHover(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    (e.target as HTMLImageElement).src = props.hoverImg;
  }

  function mouseLeave(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    (e.target as HTMLImageElement).src = props.src;
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={props.src}
          alt="Shoes"
          className="h-96 object-cover rounded-lg cursor-pointer"
          onMouseOver={mouseHover}
          onMouseLeave={mouseLeave}
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center font-bold text-2xl">
          <h2 className="card-title">{props.category}</h2>
          <h2>Size: {props.size}</h2>
        </div>
        <p>{props.description}</p>
        <div className="card-actions justify-between items-center ">
          <button className="bg-green-600 font-bold px-2 flex gap-2 items-center rounded-lg">
            <img src={icon} alt="" className="h-5" />
            {props.rating}
          </button>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
        <h2>{props.price}</h2>
      </div>
    </div>
  );
}
