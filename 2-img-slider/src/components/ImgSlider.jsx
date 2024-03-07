import React, { useEffect, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from "react-icons/bs";
const ImgSlider = ({ url, limit, page }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (err) {
      setErrorMsg(err.messagee);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  if (loading) {
    return <div>Loading, please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error! {errorMsg}</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-center lg:max-w-3xl max-w-2xl min-h-96 mx-auto relative">
        <BsFillArrowLeftCircleFill
          onClick={handlePrevious}
          className="absolute w-8 h-8 text-red-600 left-4 z-10"
        />
        {images && images.length
          ? images.map((img, index) => (
              <img
                src={img.download_url}
                alt={img.url}
                key={img.id}
                className={`${
                  currentSlide === index ? "block" : "hidden"
                } rounded-lg shadow-lg w-full h-full relative mt-3`}
              />
            ))
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="absolute w-8 h-8 text-red-600 right-4 "
        />

        <span className="flex absolute sm:top-[480px] top-72  ">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`${
                    currentSlide === index
                      ? "bg-red-600 h-4 w-4 rounded-full border-none mx-1 "
                      : "bg-red-300 h-4 w-4 rounded-full border-none mx-1"
                  }`}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
};

export default ImgSlider;
