import Layout from "../components/Layout";
import { BsPlusLg } from "react-icons/bs";

export default function ConceptCreation() {
  return (
    <Layout pageTitle="Création d'un concept (idée/projet)">
      <div className="px-10">
        <h1 className="text-4xl text-deep-orange">Création de concept :</h1>
        <form>
          <div className="flex justify-between align-top">
            <div className=" w-[50%]">
              <div className="flex flex-col my-4">
                <label htmlFor="conceptName" className="py-2">
                  Nom du concept :
                </label>
                <input
                  type="text"
                  id="conceptName"
                  className="rounded-xl p-2"
                />
              </div>
              <div className="flex flex-col my-4 py-2">
                <label htmlFor="status" className="py-2">
                  Statut :
                </label>
                <input type="text" id="status" className="rounded-xl p-2" />
              </div>
              <div className="flex flex-col my-4 py-2">
                <label htmlFor="domain" className="py-2">
                  Domaine :
                </label>
                <input type="text" id="domain" className="rounded-xl p-2" />
              </div>
              <div className="flex flex-col my-4 py-2">
                <label htmlFor="domain" className="py-2">
                  Agence :
                </label>
                <input type="text" id="domain" className="rounded-xl p-2" />
              </div>
            </div>
            <div className="my-4 py-2 px-3 w-[50%] flex justify-center flex-col items-center">
              <p className="pb-2 self-start pl-[20%]">Photo :</p>
              <div className="w-[60%] h-[300px] border-dashed border-2 border-deep-blue rounded-xl bg-dark-grey relative">
                <div className="w-[100%] h-[100%] absolute top-0">
                  <BsPlusLg
                    style={{
                      width: "30%",
                      height: "30%",
                      margin: "35% auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-4 py-2">
            <label htmlFor="description" className="py-2">
              Description :
            </label>
            <textarea
              id="description"
              className="w-[100%] h-[150px] rounded-xl"
            />
            <button
              type="submit"
              className="py-5 bg-deep-orange text-deep-blue w-[15%] align-middle rounded-xl self-center mt-5"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
