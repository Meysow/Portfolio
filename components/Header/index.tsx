import Hamburger from "@/components/Hamburger";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.name}>Thibault Dilman</div>
        <nav className={style.navBar}>
          <div>logo 1</div>

          <Hamburger />
        </nav>
      </div>
    </header>
  );
};

export default Header;
