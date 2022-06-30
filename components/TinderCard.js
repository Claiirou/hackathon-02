import Image from "next/image";
import React from "react";
import TinderCard from "react-tinder-card";

const Card = ({ name, image }) => {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div>
      <TinderCard
        className="h-[400px] w-[300px] bg-[#E89759] rounded-xl flex justify-center items-center mx-auto"
        onSwipe={(direction) => onSwipe(direction)}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["up", "down"]}
      >
        <div className="flex-col items-center">
          <Image
            src={image}
            width={250}
            height={300}
            alt={name}
            className="rounded-xl"
          />
          <div>{name}</div>
        </div>
      </TinderCard>
      <button onClick={() => onSwipe("left")}>Swipe left</button>
      <button onClick={() => onSwipe("right")}>Swipe right</button>
    </div>
  );
};

export default Card;
