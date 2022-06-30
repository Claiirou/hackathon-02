import s from "../styles/VerticalNavbar.module.css";
import ActiveLink from "./ActiveLink";

export const VerticalNavbar = () => {
  return (
    <nav className={s.v_nav_container}>
      <ActiveLink href="/" activeClassName="active">
        <div className={s.dashboard}>
          {" "}
          <a className={s.linkbox}>
            <div className={s.whiteSquare}></div>
            <p>Dashboard</p>
          </a>
        </div>
      </ActiveLink>
      <ActiveLink href="/match" activeClassName="active">
        <div className={s.matchs}>
          <a className={s.linkbox}>
            <div className={s.whiteSquare}></div>
            <p>Matchs</p>
          </a>
        </div>
      </ActiveLink>
      <ActiveLink href="/ideas" activeClassName="active">
        <div className={s.ideas}>
          <a className={s.linkbox}>
            <div className={s.whiteSquare}></div>
            <p>Idées</p>
          </a>
        </div>
      </ActiveLink>
      <ActiveLink href="/projects" activeClassName="active">
        <div className={s.projects}>
          <a className={s.linkbox}>
            <div className={s.whiteSquare}></div>
            <p>Projets</p>
          </a>
        </div>
      </ActiveLink>

      <style jsx>
        {`
          .active {
            background-color: #104c83;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .active p {
            color: orange;
          }
        `}
      </style>
    </nav>
  );
};
