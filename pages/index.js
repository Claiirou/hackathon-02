import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import s from "../styles/Home.module.css";

export default function Home() {
  const [conceptsList, setConceptsList] = useState([]);
  const [matchList, setMatchList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/concept")
      .then((res) => res.data)
      .then((data) => {
        setConceptsList(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/api/match")
      .then((res) => res.data)
      .then((data) => {
        setMatchList(data);
      });
  }, []);

  console.log(conceptsList);
  return (
    <Layout pageTitle="Accueil du super hackathon">
      <div className={s.container}>
        <h1 className={s.main_title}>Dashboard</h1>
        <div className={s.cards_container}>
          <div className={s.card}>
            <h2 className={s.card_title}>Mon historique</h2>
            <p className={s.nothingHere}>Il n'y a rien à afficher içi !</p>
          </div>
          <div className={s.card}>
            <h2 className={s.card_title}>Mes Matchs ({matchList.length})</h2>
            <ul>
              {matchList.map((m) => (
                <li className={s.card_content} key={m.id}>
                  With <span className={s.whoisit}> {m.user.firstname} </span>
                  about <span className={s.whatisit}> {m.concept.name} </span>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.card}>
            <h2 className={s.card_title}>Mes Idées ({conceptsList.length})</h2>

            <ul>
              {conceptsList.map((pro) => (
                <li className={s.card_content} key={pro.id}>
                  - {pro.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={s.card}>
            <h2 className={s.card_title}>Mes Projets</h2>
            <p className={s.nothingHere}>
              Vous n'êtes actuellement associé à aucun projet :/
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
