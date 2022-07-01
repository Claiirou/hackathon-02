import { useRouter } from "next/router";
import qs from "query-string";
import { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../../components/Layout";
import MyGreatestIdea from "../../components/MyGreatestIdea";

export default function Ideas() {
  const router = useRouter();
  const { like = "" } = router.query;
  const [searchValue, setSearchValue] = useState("");
  const [conceptList, setConceptList] = useState([]);

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

  useEffect(() => {
    const queryString = qs.stringify(router.query);
    axios
      .get(`/api/match${queryString ? "?" : ""}${queryString}`)
      .then((res) => setConceptList(res.data))
      .catch(console.error);
  }, [router.query]);

  return (
    <Layout pageTitle="Mes idées">
      <div className="w-[90%] m-auto">
        <h1 className="my-8 text-deep-orange text-4xl">Mes idées</h1>
        <section className="w-full flex gap-4 mb-8">
          <input
            type="text"
            placeholder="recherche"
            className="italic cursor-text bg-white px-4 py-1 rounded-xl text-gray-700 active:border-transparent"
            onChange={handleSearch}
            value={searchValue}
          />
          <select
            id="select-like"
            className="cursor-pointer bg-white px-4 py-1 rounded-xl text-[#AAAAAA] focus:text-gray-700 "
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
        <section className="grid grid-cols-3 gap-6 mb-10">
          {conceptList
            .filter(
              (match) =>
                match.concept.domain.includes(searchValue) ||
                match.concept.name.includes(searchValue)
            )

            .map((match) => (
              <MyGreatestIdea match={match} key={match.id} />
            ))}
        </section>
      </div>
    </Layout>
  );
}
