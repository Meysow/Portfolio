import Hamburger from "@/components/Hamburger";
import Link from "next/link";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link className={style.name} href="/">
          Thibault Dilman
        </Link>
        <nav className={style.navBar}>
          <div>logo 1</div>

          <Hamburger />
        </nav>
      </div>
    </header>
  );
};

export default Header;
