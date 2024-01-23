import style from './Header.module.scss';
import Hamburger from '@/components/Hamburger';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.name}>Thibault Dilman</div>
        <nav className={style.navBar}>
          <div>logo 1</div>
          <div>logo 2</div>
          <div>logo 3</div>
          <div>logo 4</div>
          <Hamburger />
        </nav>
      </div>
    </header>
  );
};

export default Header;
