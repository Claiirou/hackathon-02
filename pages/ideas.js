import { useRouter } from "next/router";
import qs from "query-string";
import { useState } from "react";

import IdeaCard from "../components/IdeaCard";
import Layout from "../components/Layout";

export default function Ideas() {
  const router = useRouter();
  const { like = "" } = router.query;
  const [searchValue, setSearchValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/conceptcreation");
  };

  const setSearchParams = (newSearch) => {
    const queryString = qs.stringify(newSearch);
    router.push(`/ideas/${queryString ? "?" : ""}${queryString}`);
  };

  const handleSearch = (e) => {
    const searchToLower = e.target.value.toLowerCase();
    setSearchValue(searchToLower);
  };

  console.log(searchValue);

  return (
    <Layout pageTitle="Mes idées">
      <div className="w-[90%] m-auto">
        <h1 className="my-8 text-deep-orange text-4xl">Mes idées</h1>
        <section className="w-full flex gap-4">
          <input
            type="text"
            placeholder="recherche"
            className="italic cursor-text bg-white px-4 py-1 rounded-xl text-gray-700"
            onChange={handleSearch}
            value={searchValue}
          />
          <select
            id="select-like"
            className="cursor-pointer bg-white px-4 py-1 rounded-xl text-[#AAAAAA] focus:text-gray-700"
            value={like}
            onChange={(e) => setSearchParams({ like: e.target.value })}
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
            className="cursor-pointer bg-white px-4 py-1 rounded-xl text-gray-700 italic hover:bg-light-blue hover:text-white duration-500 ease-in-out"
            onClick={(e) => handleClick(e)}
          >
            Ajouter une idée
          </button>
        </section>
        <section>
          <IdeaCard />
        </section>
      </div>
    </Layout>
  );
}
