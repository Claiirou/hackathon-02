import Image from "next/image";
import React, { useRef, useState, useMemo, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { GoRocket } from "react-icons/go";
import axios from "axios";

const Card = ({ userList, index, idIdea, type }) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);
  const [match, setMatch] = useState([]);

  useEffect(() => {
    axios.get("/api/match").then((res) => setMatch(res.data));
  }, []);

  const childRefs = useMemo(
    () =>
      Array(index)
        .fill(0)
        .map((i) => React.createRef()),
    [index]
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, i) => {
    setLastDirection(direction);
    updateCurrentIndex(i - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < index) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };
  console.log(lastDirection);
  console.log(match);
  console.log(idIdea);
  return (
    <>
      <div className="w-[50%]">
        {type === "user" &&
          userList.map((poule, i) => (
            <div key={i} className="relative mx-auto">
              <TinderCard
                ref={childRefs[i]}
                onSwipe={(direction) => swiped(direction, poule.firstname, i)}
                onCardLeftScreen={() => outOfFrame(poule.firstname, i)}
                preventSwipe={["up", "down"]}
              >
                <div className="h-[450px] w-[350px] bg-[#E89759] rounded-xl flex justify-center items-center absolute left-[30%] top-[50px]">
                  <div className="flex-col items-center">
                    <Image
                      src={poule.picture}
                      width={250}
                      height={300}
                      alt={poule.firstname}
                      className="rounded-xl relative"
                    />
                    <div>{`${poule.firstname} ${poule.lastname}`}</div>
                  </div>
                </div>
                <div className="absolute flex-col items-end rounded-xl w-[80%] left-[100%] top-[50px] p-7">
                  <div className="bg-white rounded-xl px-4 py-7">
                    <span className="font-bold"> Biographie :</span>{" "}
                    {poule.biography}
                  </div>
                  <div className="bg-white rounded-xl my-5 p-4">
                    <span className="font-bold"> Agence :</span> {poule.agency}
                  </div>
                  <div className="bg-white rounded-xl my-5 p-4">
                    <span className="font-bold"> Années d'expériences :</span>{" "}
                    {poule.xpyear}
                  </div>
                </div>
              </TinderCard>
            </div>
          ))}
        {type === "concept" &&
          userList.map((poule, i) => (
            <div key={i} className="relative mx-auto">
              <TinderCard
                ref={childRefs[i]}
                onSwipe={(direction) => swiped(direction, poule.name, i)}
                onCardLeftScreen={() => outOfFrame(poule.name, i)}
                preventSwipe={["up", "down"]}
              >
                <div className="h-[450px] w-[350px] bg-[#E89759] rounded-xl flex justify-center items-center absolute left-[30%] top-[50px]">
                  <div className="flex-col items-center">
                    <Image
                      src={poule.picture}
                      width={250}
                      height={300}
                      alt={poule.name}
                      className="rounded-xl relative"
                    />
                    <div>{poule.name}</div>
                  </div>
                </div>
                <div className="absolute flex-col items-end rounded-xl w-[80%] left-[100%] top-[50px] p-7">
                  <div className="bg-white rounded-xl px-4 py-7">
                    <span className="font-bold"> Description :</span>{" "}
                    {poule.description}
                  </div>
                  <div className="bg-white rounded-xl my-5 p-4">
                    <span className="font-bold"> Agence :</span> {poule.agency}
                  </div>
                  <div className="bg-white rounded-xl my-5 p-4">
                    <span className="font-bold"> Domaine :</span> {poule.domain}
                  </div>
                </div>
              </TinderCard>
            </div>
          ))}
        <div className="flex relative top-[550px] left-[32%]">
          <div
            className="rounded-full bg-deep-orange p-7 cursor-pointer mx-8"
            onClick={() => swipe("left")}
          >
            <GoRocket
              size={50}
              style={{ transform: "rotate(180deg)", color: "white" }}
            />
          </div>
          <div
            className="rounded-full bg-deep-orange p-7 cursor-pointer"
            onClick={() => swipe("right")}
          >
            <GoRocket size={50} style={{ color: "white" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
