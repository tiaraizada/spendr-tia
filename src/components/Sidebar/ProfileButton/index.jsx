import clsx from "clsx";
import Spendr from "assets/images/profile/spendr.jpeg";
import styles from "./index.module.scss";

const ProfileButton = () => {
  return (
    <div className={styles.container}>
      <div className={styles["image-cont"]}>
        <div className={styles.image}>
          <img src={Spendr} alt="your profile" />
        </div>
      </div>
      <div className={styles.content}>
        <div
          className={clsx(
            styles["text--primary"],
            styles["text--align"],
            styles["text--clickable"]
          )}
        >
          <span>Tia Raizada</span>
        </div>
        <div className={clsx(styles["text--secondary"], styles["text--align"])}>
          <span>CSE STUDENT</span>
        </div>
      </div>
      <div className={styles.dropdown}>
        <span className="material-icons">keyboard_arrow_down</span>
      </div>
    </div>
  );
};

export default ProfileButton;
