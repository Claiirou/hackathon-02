import { MdComment } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

export default function MyGreatestIdea({ concept }) {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-2">
      <div className="flex space-around">
        <h1 className="font-black text-2xl w-full">{concept.domain}</h1>
        <div className="rounded-3xl w-10 h-8 bg-[#FFE249]"></div>
      </div>
      <h2>{concept.name}</h2>
      <p className=" text-gray-400 italic ">{concept.description}</p>
      <div className="flex">
        <label htmlFor="status-concept" className="mr-4">
          Quel est le statut du concept ?
        </label>
        <div className=" bg-slate-300 px-2 text-gray-600 rounded-md ">
          {concept.status}
        </div>
      </div>
      <div className="flex gap-4 mt-10">
        <img className="w-10 h-10 rounded-3xl" src="/image/fusee.png"></img>
        <img className="w-10 h-10 rounded-3xl" src="/image/dragon.png"></img>
        <img className="w-10 h-10 rounded-3xl" src="/image/profil.jpg"></img>
        <img className="w-10 h-10 rounded-3xl" src="/image/poule1.jpg"></img>
      </div>

      <div className="flex gap-4 mt-4">
        <div className="border-[#999999] border-[1px] p-2 text-[#999999] text-2xl cursor-pointer hover:text-deep-orange hover:border-deep-orange duration-500 ease-in-out">
          <MdComment />
        </div>
        <div className="border-[#999999] border-[1px] p-2 text-[#999999] text-2xl cursor-pointer hover:text-deep-blue hover:border-deep-blue duration-500 ease-in-out">
          <BsFillChatDotsFill />{" "}
        </div>
        <div className="border-[#999999] border-[1px] p-2 text-[#999999] text-2xl cursor-pointer hover:text-[#464646] hover:border-[#464646] duration-500 ease-in-out">
          <BsSearch />{" "}
        </div>
      </div>
    </div>
  );
}
