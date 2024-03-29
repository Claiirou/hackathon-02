/* eslint-disable no-unused-vars */
import Image from "next/image";
import React, { useRef, useState, useMemo, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { GoRocket } from "react-icons/go";
import axios from "axios";
import useSound from "use-sound";

const Card = ({ userList, index, idIdea, type }) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);
  const [match, setMatch] = useState([]);
  const [techno, setTechno] = useState([]);

  const [play] = useSound("/sound/artifice.mp3");

  useEffect(() => {
    axios.get("/api/match").then((res) => setMatch(res.data));
    axios.get("/api/techno").then((res) => setTechno(res.data));
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
    play();
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

  const handleSwipeRight = () => {
    swipe("right");
    play();
  };

  console.log(lastDirection);
  console.log(match);
  console.log(idIdea, "coucou ");
  return (
    <>
      <div className="w-[50%]">
        {type === "user" &&
          userList.map((poule, i) => (
            <div key={i} className="relative mx-auto">
              <TinderCard
                ref={childRefs[i]}
                onSwipe={(direction) =>
                  swiped(direction, poule.firstname, play(), i)
                }
                onCardLeftScreen={() => outOfFrame(poule.firstname, i)}
                preventSwipe={["up", "down"]}
              >
                <div className="h-[450px] w-[350px] bg-[#E89759] rounded-xl flex justify-center absolute left-[30%] top-[50px]">
                  <div className="flex-col">
                    <Image
                      src={poule.picture}
                      width={350}
                      height={350}
                      alt={poule.firstname}
                      className="rounded-xl relative"
                    />
                    <div className="flex justify-center mt-5 font-bold text-white text-xl">{`${poule.firstname} ${poule.lastname}`}</div>
                  </div>
                </div>
                <div className="absolute flex-col items-end rounded-xl w-[80%] left-[100%] top-[50px] p-7 pt-0">
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
                  <div className="bg-white rounded-xl my-5 p-4">
                    <span className="font-bold"> Stack technique :</span>{" "}
                    {techno.map((t) => (
                      <div key={t.id} className="flex justify-evenly">
                        <Image
                          src={t.picture}
                          width={55}
                          height={55}
                          alt={t.name}
                        />
                        <div className="mx-5">{t.name}</div>
                      </div>
                    ))}
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
                onSwipe={(direction) =>
                  swiped(
                    direction,
                    play(),

                    poule.name,
                    i
                  )
                }
                onCardLeftScreen={() => outOfFrame(poule.name, i)}
                preventSwipe={["up", "down"]}
              >
                <div className="h-[450px] w-[350px] bg-[#E89759] rounded-xl flex justify-center absolute left-[30%] top-[50px]">
                  <div className="flex-col">
                    <Image
                      src={poule.picture}
                      width={350}
                      height={350}
                      alt={poule.name}
                      className="rounded-xl relative"
                    />
                    <div className="flex justify-center mt-5 font-bold text-white text-xl">
                      {poule.name}
                    </div>
                  </div>
                </div>
                <div className="absolute flex-col items-end rounded-xl w-[80%] left-[100%] top-[50px] p-7 pt-0">
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
                  <div className="bg-white rounded-xl my-5 p-4">
                    <span className="font-bold"> Status :</span> {poule.status}
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
            onClick={handleSwipeRight}
          >
            <GoRocket size={50} style={{ color: "white" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
