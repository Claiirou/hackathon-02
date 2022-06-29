import s from "../styles/VerticalNavbar.module.css";
import Link from "next/link";

export const VerticalNavbar = () => {
  return (
    <nav className={s.v_nav_container}>
      <div className={s.dashboard}>
        {" "}
        <Link href="/">
          <a>
            <div className={s.whiteSquare}></div>
            <p>Dashboard</p>
          </a>
        </Link>
      </div>
      <div className={s.matchs}>
        <Link href="/match">
          <a>
            <div className={s.whiteSquare}></div>
            <p>Matchs</p>
          </a>
        </Link>
      </div>
      <div className={s.ideas}>
        <Link href="/ideas">
          <a>
            <div className={s.whiteSquare}></div>
            <p>Idées</p>
          </a>
        </Link>
      </div>
      <div className={s.projects}>
        <Link href="/projects">
          <a>
            <div className={s.whiteSquare}></div>
            <p>Projets</p>
          </a>
        </Link>
      </div>
    </nav>
  );
};
