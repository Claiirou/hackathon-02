import Layout from "../components/Layout";
import { BsPlusLg } from "react-icons/bs";
import { useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function ConceptCreation() {
  const defaultState = {
    name: "",
    description: "",
    domain: "",
    status: "",
    picture: "",
    agency: "",
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
      await axios.post("/api/concept", formInfos);
      setFormInfos(defaultState);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Layout pageTitle="Création d'un concept (idée/projet)">
      <div className="px-10 mt-6">
        <h1 className="text-4xl text-deep-orange">Création de concept :</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between align-top">
            <div className=" w-[50%]">
              <div className="flex flex-col my-2">
                <label htmlFor="conceptName" className="py-1">
                  Nom du concept :
                </label>
                <input
                  type="text"
                  id="conceptName"
                  className="rounded-xl p-2 px-5"
                  value={formInfos.name}
                  onChange={(e) =>
                    setFormInfos({ ...formInfos, name: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col my-2 py-2">
                <label htmlFor="status" className="py-1">
                  Statut :
                </label>
                <select
                  name="concept"
                  id="status"
                  className="rounded-xl p-2 bg-white px-5 border-r-8 border-white"
                  value={formInfos.status}
                  onChange={(e) =>
                    setFormInfos({ ...formInfos, status: e.target.value })
                  }
                >
                  <option value="Choisir une option">Choisir une option</option>
                  <option value="Idée en cours">Idée en cours</option>
                  <option value="Idée validée">Idée validée</option>
                  <option value="Projet en cours">Projet en cours</option>
                  <option value="Projet validé">Projet validé</option>
                  <option value="Supprimé">Supprimé</option>
                </select>
              </div>
              <div className="flex flex-col my-2 py-2">
                <label htmlFor="domain" className="py-1">
                  Domaine :
                </label>
                <input
                  type="text"
                  id="domain"
                  className="rounded-xl p-2 px-5"
                  value={formInfos.domain}
                  onChange={(e) =>
                    setFormInfos({ ...formInfos, domain: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col my-2 py-2">
                <label htmlFor="agency" className="py-1">
                  Agence :
                </label>
                <input
                  type="text"
                  id="agency"
                  className="rounded-xl p-2 px-5"
                  value={formInfos.agency}
                  onChange={(e) =>
                    setFormInfos({ ...formInfos, agency: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="my-4 py-2 px-3 w-[50%] flex justify-center flex-col items-center">
              <label htmlFor="photo" className="pb-2 self-start pl-[20%]">
                Photo :
              </label>
              <div className="w-[60%] h-[300px] border-dashed border-2 border-deep-blue rounded-xl bg-dark-grey relative">
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
                  <Image
                    alt="photo"
                    layout="fill"
                    src={formInfos.picture.replace("C:\\fakepath\\", "/image/")}
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
            <label htmlFor="description" className="py-1">
              Description :
            </label>
            <textarea
              id="description"
              className="w-[100%] h-[100px] rounded-xl p-2 px-5"
              value={formInfos.description}
              onChange={(e) =>
                setFormInfos({ ...formInfos, description: e.target.value })
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
