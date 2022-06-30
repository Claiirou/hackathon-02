import s from "../styles/VerticalNavbar.module.css";
import ActiveLink from "./ActiveLink";
import { BsHeart } from "react-icons/bs";
import { RiHomeLine } from "react-icons/ri";
import { GoLightBulb } from "react-icons/go";
import { BiBookContent } from "react-icons/bi";

export const VerticalNavbar = () => {
  return (
    <nav className={s.v_nav_container}>
      <ActiveLink href="/" activeClassName="active">
        <div className={s.dashboard}>
          {" "}
          <a className={s.linkbox}>
            <RiHomeLine style={{ fontSize: "2rem", marginBottom: "5px" }} />
            <p>Dashboard</p>
          </a>
        </div>
      </ActiveLink>
      <ActiveLink href="/match" activeClassName="active">
        <div className={s.matchs}>
          <a className={s.linkbox}>
            <BsHeart style={{ fontSize: "2rem", marginBottom: "5px" }} />
            <p>Matchs</p>
          </a>
        </div>
      </ActiveLink>
      <ActiveLink href="/ideas" activeClassName="active">
        <div className={s.ideas}>
          <a className={s.linkbox}>
            <GoLightBulb style={{ fontSize: "2rem", marginBottom: "5px" }} />
            <p>Idées</p>
          </a>
        </div>
      </ActiveLink>
      <ActiveLink href="/projects" activeClassName="active">
        <div className={s.projects}>
          <a className={s.linkbox}>
            <BiBookContent style={{ fontSize: "2rem", marginBottom: "5px" }} />
            <p>Projets</p>
          </a>
        </div>
      </ActiveLink>

      <style jsx>
        {`
          .active {
            background-color: #104c83;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: orange;
            padding: 40px 0px;
          }
          .active p {
            color: orange;
          }
        `}
      </style>
    </nav>
  );
};
