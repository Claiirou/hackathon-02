import Layout from "../components/Layout";

export default function ConceptCreation() {
  return (
    <div>
      <Layout pageTitle="Création d'un concept (idée/projet)">
        <div className="px-10">
          <h1>Création de concept :</h1>
          <form>
            <div className="flex justify-between align-top">
              <div className="w-[45%]">
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
              </div>
              <div className="w-[45%] my-4 py-2 px-3">
                <p>Photo :</p>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-4 py-2">
              <label htmlFor="description" className="py-2">
                Description :
              </label>
              <textarea
                id="description"
                className="w-[85%] h-[150px] rounded-xl"
              />
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
}
