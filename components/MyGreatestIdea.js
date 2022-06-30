import { MdComment } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

export default function MyGreatestIdea() {
  return (
    <div className="w-1/4 h-1/2">
      <h1>Agriculture</h1>
      <h2>Poulailler</h2>
      <p>Un poulailler avec de belles poulettes et des noms à croquer</p>
      <label htmlFor="status-concept">Quel est le statut du concept ?</label>
      <select name="concept" id="status-concept">
        <option value="Idée en cours">Idée en cours</option>
        <option value="Idée validée">Idée validée</option>
        <option value="Projet en cours">Projet en cours</option>
        <option value="Projet validé">Projet validé</option>
        <option value="Obliviate">Obliviate</option>
      </select>
      <div className="flex justify-around">
        <img className="w-8 h-8" src="/image/fusee.png"></img>
        <img className="w-8 h-8" src="/image/dragon.png"></img>
        <img className="w-8 h-8" src="/image/profil.jpg"></img>
        <img className="w-8 h-8" src="/image/poule1.jpg"></img>
      </div>

      <div className="flex justify-around">
        <MdComment />
        <BsFillChatDotsFill />
        <BsSearch />
      </div>
    </div>
  );
}
