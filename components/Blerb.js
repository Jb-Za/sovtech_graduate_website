import { ImageSlider } from "./ImageSlider";
import styles from "../styles/Blerb.module.css";
import classNames from "classnames";

export function Blerb({ title, body, images, reverse }) {
  return (
    <div
      className={classNames(
        styles.blerbHolder,
        reverse ? styles.rowReverse : styles.row
      )}
    >
      <ImageSlider slides={images} />

      <div className={styles.textBox}>
        <p className={styles.headings}>{title}</p>
        <hr></hr>
        <p className={styles.paragraphs}>{body}</p>
      </div>
    </div>
  );
}
