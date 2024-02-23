import amazona from "@/public/assets/Amazona large.png";
import Image from "next/image";
import styles from "./ProjectAnimated.module.scss";

interface Proptypes {
  isActive: boolean;
}

const ProjectAnimated = ({ isActive }: Proptypes) => {
  const classActive = isActive ? styles.active : "";
  return (
    <div className={classActive}>
      <div className={styles.illustration}>
        <Image
          src={amazona}
          alt="Illustration of Amazona Project"
          placeholder="blur"
          className={styles.cover}
        />

        <div className={styles.previews}>
          <div className={styles.previewImage}>
            <img src="https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg" />
          </div>
          <div className={styles.previewImage}>
            <img src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg" />
          </div>

          <div className={styles.previewImage}>
            <img src="https://cdn.fstoppers.com/styles/large/s3/lead/2018/07/take_better_shots_with_your_drone_landscape_photos.jpg" />
          </div>
          <div className={styles.previewImage}>
            <img src="https://d31fr2pwly4c4s.cloudfront.net/8/6/c/1080632_0_landscape-photography_400.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAnimated;
