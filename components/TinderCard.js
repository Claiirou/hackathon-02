import Image from "next/image";
import React, { useRef, useState, useMemo } from "react";
import TinderCard from "react-tinder-card";
import { GoRocket } from "react-icons/go";

const db = [
  {
    name: "Poule McCartney",
    url: "/images/chicken-1.jpg",
  },
  {
    name: "Poule Mirabel",
    url: "/images/chicken-2.jpg",
  },
  {
    name: "Poule Bocuse",
    url: "/images/chicken-3.jpg",
  },
  {
    name: "Poule Pogba",
    url: "/images/turkey.png",
  },
];

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  //   const onSwipe = (direction) => {
  //     console.log("You swiped: " + direction);
  //   };
  //   const onCardLeftScreen = (myIdentifier) => {
  //     console.log(myIdentifier + " left the screen");
  //   };
  return (
    <div className="w-[50%]">
      {db.map((poule, i) => (
        <div key={i} className="relative mx-auto">
          <TinderCard
            ref={childRefs[i]}
            className="h-[400px] w-[300px] bg-[#E89759] rounded-xl flex justify-center items-center absolute left-[30%] top-[100px]"
            onSwipe={(direction) => swiped(direction, poule.name, i)}
            onCardLeftScreen={() => outOfFrame(poule.name, i)}
            preventSwipe={["up", "down"]}
          >
            <div className="flex-col items-center">
              <Image
                src={poule.url}
                width={250}
                height={300}
                alt={poule.name}
                className="rounded-xl relative"
              />
              <div>{poule.name}</div>
            </div>
          </TinderCard>
        </div>
      ))}
      <div className="flex relative top-[550px] left-[29%]">
        <div
          className="rounded-full bg-deep-orange p-7 cursor-pointer mx-8"
          onClick={() => swipe("left")}
        >
          <GoRocket size={50} style={{ transform: "rotate(180deg)" }} />
        </div>
        <div
          className="rounded-full bg-deep-orange p-7 cursor-pointer"
          onClick={() => swipe("right")}
        >
          <GoRocket size={50} />
        </div>
      </div>
    </div>
  );
};

export default Card;
