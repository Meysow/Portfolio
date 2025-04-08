import style from './BackgroundImage.module.scss';

const BackgroundImage = () => {
  return (
    <div className={style.bg_container}>
      <div className={style.bg}></div>
    </div>
  );
};

export default BackgroundImage;
