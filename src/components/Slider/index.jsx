import React, { useEffect } from 'react';
import './style.css';

// import pic1 from '../../images/1.jpg';
// import pic2 from '../../images/2.jpg';
// import pic3 from '../../images/3.png';
// import pic4 from '../../images/4.webp';
const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.png',
  '/images/4.webp',
];
const Carousel = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const refs = images.reduce((acc, val, i) => {
    acc[i] = React.createRef();

    return acc;
  }, {});

  const scrollToImage = (i) => {
    if (!refs[i].current) {
      return;
    }

    setCurrentImage(i);

    refs[i].current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  useEffect(() => {
    const p = setInterval(() => {
      scrollToImage(currentImage + 1);
    }, 5_000);

    return () => {
      clearInterval(p);
    };
  }, [JSON.stringify(refs)]);
  // Some validation for checking the array length could be added if needed
  const totalImages = images.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    'absolute flex text-[#333] text-3xl z-10 h-10 w-10 rounded-full opacity-75 flex items-center justify-center';

  // Let's create dynamic buttons. It can be either left or right. Using
  // isLeft boolean we can determine which side we'll be rendering our button
  // as well as change its position and content.
  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clip-rule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            />
          </svg>
        )}
      </span>
    </button>
  );

  return (
    <div className="w-screen flex justify-center z-0	">
      <div className="w-screen z-0">
        <div className="relative w-full z-0">
          <div className="carousel z-0">
            {sliderControl(true)}
            {images.map((img, i) => (
              <div
                className="w-full flex-shrink-0 z-0  h-[420px]"
                key={img}
                ref={refs[i]}
              >
                <img
                  src={img}
                  className=" h-full w-full object-cover object-center"
                />
              </div>
            ))}
            {sliderControl()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
