import Layout from "../components/Layout";
import s from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle="Accueil du super hackathon">
      <div className={s.container}>
        <h1 className={s.main_title}>Dashboard</h1>
        <div className={s.cards_container}>
          <div className={s.card}>
            <h2 className={s.card_title}>Mon historique</h2>
            <p className={s.card_content}> Mes alertes</p>
            <p className={s.card_content}> Mes suivis</p>
          </div>
          <div className={s.card}>
            <h2 className={s.card_title}>Mes Matchs</h2>
            <p className={s.card_content}>Nombre de Matchs:</p>
          </div>
          <div className={s.card}>
            <h2 className={s.card_title}>Mes Idées</h2>
            <p className={s.card_content}>Nombre d'idées: </p>
            <p className={s.card_content}>Nombre de likes: </p>
          </div>
          <div className={s.card}>
            <h2 className={s.card_title}>Mes Projets</h2>
            <p className={s.card_content}>Nombre de projets: </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
