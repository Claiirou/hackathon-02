import s from "../styles/VerticalNavbar.module.css";

export const VerticalNavbar = () => {
  return (
    <nav className={s.v_nav_container}>
      <div className={s.dashboard}>
        <div className={s.whiteSquare}></div>
        <p>Dashboard</p>
      </div>
      <div className={s.matchs}>
        <div className={s.whiteSquare}></div> <p>Matchs</p>
      </div>
      <div className={s.ideas}>
        <div className={s.whiteSquare}></div>
        <p>Idées</p>
      </div>
      <div className={s.projects}>
        <div className={s.whiteSquare}></div>
        <p>Projets</p>
      </div>
    </nav>
  );
};
