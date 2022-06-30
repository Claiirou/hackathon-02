import { MdComment } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

export default function MyGreatestIdea() {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-2">
      <div className="flex space-around">
        <h1 className="font-black text-2xl w-full">Agriculture</h1>
        <div className="rounded-3xl w-10 h-10 bg-[#FFE249]"></div>
      </div>
      <h2>Mon petit poulailler</h2>
      <p className=" text-gray-400 italic ">
        Un poulailler avec de belles poulettes et des noms à croquer
      </p>
      <div>
        <label htmlFor="status-concept" className="mr-4">
          Quel est le statut du concept ?
        </label>
        <select name="concept" id="status-concept" className="pr-10 pl-[1px]">
          <option value="Idée en cours">Idée en cours</option>
          <option value="Idée validée">Idée validée</option>
          <option value="Projet en cours">Projet en cours</option>
          <option value="Projet validé">Projet validé</option>
          <option value="Obliviate">Obliviate</option>
        </select>
      </div>
      <div className="flex gap-4 mt-10">
        <img className="w-10 h-10 rounded-3xl" src="/image/fusee.png"></img>
        <img className="w-10 h-10 rounded-3xl" src="/image/dragon.png"></img>
        <img className="w-10 h-10 rounded-3xl" src="/image/profil.jpg"></img>
        <img className="w-10 h-10 rounded-3xl" src="/image/poule1.jpg"></img>
      </div>

      <div className="flex gap-4 mt-4">
        <div className="border-[#999999] border-[1px] p-2 text-[#999999] text-2xl">
          <MdComment />
        </div>
        <div className="border-[#999999] border-[1px] p-2 text-[#999999] text-2xl">
          <BsFillChatDotsFill />{" "}
        </div>
        <div className="border-[#999999] border-[1px] p-2 text-[#999999] text-2xl">
          <BsSearch />{" "}
        </div>
      </div>
    </div>
  );
}
