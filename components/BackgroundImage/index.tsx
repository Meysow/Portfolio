import background from "@/public/assets/backgroundFour.png";
import Image from "next/image";
import style from "./BackgroundImage.module.scss";

const BackgroundImage = () => {
  return (
    <div className={style.bg_container}>
      <div className={style.bg}>
        <Image
          src={background}
          alt="background image"
          fill
          priority={true}
          placeholder="blur"
          sizes="100vw"
          quality={75}
        />
      </div>
    </div>
  );
};

export default BackgroundImage;
