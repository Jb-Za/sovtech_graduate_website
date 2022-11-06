import { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import styles from "../styles/slider.module.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  //unicode icons
  return (
    <div className={styles.wrapperStyles}>
      <div>
        <BsChevronLeft
          onClick={goToPrevious}
          className={styles.leftArrowStyles}
        />

        <BsChevronRight
          onClick={goToNext}
          className={styles.rightArrowStyles}
        />
      </div>
      <div
        className={styles.slideStyles}
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      <div className={styles.dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            className={styles.dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
