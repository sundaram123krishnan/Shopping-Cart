import React from "react";

export default function Card(props) {
  function mouseHover(event) {
    event.target.src = props.hoverImg;
  }
  function mouseLeave(event) {
    event.target.src = props.src;
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
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
