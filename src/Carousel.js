import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const total = photos.length;

  const goForward = () => {
    setCurrCardIdx(currCardIdx + 1);
  };

  const goBackward = () => {
    setCurrCardIdx(currCardIdx - 1);
  };

  const isLastImage = currCardIdx === photos.length - 1;
  const isFirstImage = currCardIdx === 0;

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {!isFirstImage && (
          <i className="bi bi-arrow-left-circle" onClick={goBackward} />
        )}
        <Card
          caption={photos[currCardIdx].caption}
          src={photos[currCardIdx].src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {!isLastImage && (
          <i className="bi bi-arrow-right-circle" onClick={goForward} />
        )}
      </div>
    </div>
  );
}

export default Carousel;
