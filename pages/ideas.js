import IdeaCard from "../components/IdeaCard";
import Layout from "../components/Layout";

export default function Ideas() {
  return (
    <div>
      <Layout pageTitle="Mes idées">
        <h1 className="text-deep-orange text-2xl">Mes idées</h1>
        <section className="w-full flex gap-2">
          <input
            type="text"
            placeholder="recherche"
            className="italic cursor-text bg-white px-4 rounded-xl"
          />
          <select
            id="select-like"
            className="cursor-pointer bg-white px-4 rounded-xl"
          >
            <option value="showall">Tout montrer</option>
            <option value="showliked">
              Ne montrer que les idées que j'ai liké
            </option>
            <option value="showcreated">
              Ne montrer que les idées que j'ai créé
            </option>
          </select>
          <button
            type="button"
            className="cursor-pointer bg-white px-4 rounded-xl"
          >
            Ajouter une idée
          </button>
        </section>
        <section>
          <IdeaCard />
        </section>
      </Layout>
    </div>
  );
}
