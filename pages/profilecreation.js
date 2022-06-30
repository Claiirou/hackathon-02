import Layout from "../components/Layout";
import { BsPlusLg } from "react-icons/bs";
import { useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function ProfileCreation() {
  const defaultState = {
    firstname: "",
    lastname: "",
    agency: "",
    email: "",
    picture: "",
    biography: "",
    xpyear: "",
  };
  const [formInfos, setFormInfos] = useState(defaultState);

  const photoUploadRef = useRef();

  const handlePhotoClick = () => {
    photoUploadRef.current.click();
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formInfos);
    try {
      await axios.post("/api/user", formInfos);
      setFormInfos(defaultState);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Layout pageTitle="Création d'un profil">
      <div className="px-10 mt-6">
        <h1 className="text-4xl text-deep-orange">Création de profil :</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between align-top">
            <div className=" w-[50%]">
              <div className="flex flex-col my-2">
                <label htmlFor="firstname" className="py-1">
                  Prénom :
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="rounded-xl p-2 px-5"
                  value={formInfos.firstname}
                  onChange={(e) =>
                    setFormInfos({ ...formInfos, firstname: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col my-2 py-2">
                <label htmlFor="lastname" className="py-1">
                  Nom :
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="rounded-xl p-2 px-5"
                  value={formInfos.lastname}
                  onChange={(e) =>
                    setFormInfos({ ...formInfos, lastname: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col my-2 py-2">
                <label htmlFor="email" className="py-1">
                  Email :
                </label>
                <input
                  type="text"
                  id="email"
                  className="rounded-xl p-2 px-5"
                  value={formInfos.email}
                  onChange={(e) =>
                    setFormInfos({ ...formInfos, email: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col my-2 py-2">
                <label htmlFor="agency" className="py-1">
                  Agence :
                </label>
                <select
                  name="agency"
                  id="agency"
                  className="rounded-xl p-2 bg-white px-5 border-r-8 border-white"
                  value={formInfos.agency}
                  onChange={(e) =>
                    setFormInfos({ ...formInfos, agency: e.target.value })
                  }
                >
                  <option value="Choisir une option">Choisir une option</option>
                  <option value="Aix-en-Provence">Aix-en-Provence</option>
                  <option value="Aveiro">Aveiro</option>
                  <option value="Bordeaux">Bordeaux</option>
                  <option value="Brest">Brest</option>
                  <option value="Bruxelles">Bruxelles</option>
                  <option value="Canada">Canada</option>
                  <option value="Casablanca">Casablanca</option>
                  <option value="Clermont-Ferrand">Clermont-Ferrand</option>
                  <option value="Dijon">Dijon</option>
                  <option value="Genève">Genève</option>
                  <option value="Le Mans">Le Mans</option>
                  <option value="Lille">Lille</option>
                  <option value="Lyon">Lyon</option>
                  <option value="Montpellier">Montpellier</option>
                  <option value="Munich">Munich</option>
                  <option value="Nantes">Nantes</option>
                  <option value="Nice-Sofia Antipolis">
                    Nice-Sofia Antipolis
                  </option>
                  <option value="Niort">Niort</option>
                  <option value="Orléans">Orléans</option>
                  <option value="Paris">Paris</option>
                  <option value="Rennes">Rennes</option>
                  <option value="Strasbourg">Strasbourg</option>
                  <option value="Toulouse">Toulouse</option>
                  <option value="Tours">Tours</option>
                  <option value="Vernon">Vernon</option>
                </select>
              </div>
              <div className="flex flex-col my-2 py-2">
                <label htmlFor="xpyear" className="py-1">
                  Année(s) d'expérience :
                </label>
                <input
                  type="number"
                  id="xpyear"
                  className="rounded-xl p-2 px-5"
                  value={formInfos.xpyear}
                  onChange={(e) =>
                    setFormInfos({
                      ...formInfos,
                      xpyear: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </div>
            <div className="my-4 py-2 px-3 w-[50%] flex justify-start flex-col items-center">
              <label htmlFor="photo" className="pb-2 self-start pl-[15%]">
                Photo :
              </label>
              <div className="w-[70%] h-[400px] border-dashed border-2 border-deep-blue rounded-xl bg-dark-grey relative">
                <input
                  type="file"
                  id="photo"
                  accept="image/png, image/jpeg, image/jpg, image/gif"
                  className="w-[100%] h-[100%] absolute top-0"
                  value={formInfos.picture}
                  onChange={(e) =>
                    setFormInfos({ ...formInfos, picture: e.target.value })
                  }
                  ref={photoUploadRef}
                  style={{ display: "none" }}
                />
                {formInfos.picture ? (
                  <img
                    alt="photo"
                    layout="fill"
                    src={formInfos.picture.replace("C:\\fakepath\\", "/image/")}
                    className="bg-contain h-[100%] bg-center bg-no-repeat"
                  />
                ) : (
                  <BsPlusLg
                    style={{
                      width: "30%",
                      height: "30%",
                      margin: "35% auto",
                    }}
                    onClick={handlePhotoClick}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col my-2 py-2">
            <label htmlFor="biography" className="py-1">
              Biographie :
            </label>
            <textarea
              id="biography"
              className="w-[100%] h-[100px] rounded-xl p-2 px-5"
              value={formInfos.biography}
              onChange={(e) =>
                setFormInfos({ ...formInfos, biography: e.target.value })
              }
            />
            <button
              type="submit"
              className="py-2 bg-deep-orange text-white w-[15%] align-middle rounded-xl self-center mt-5"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
