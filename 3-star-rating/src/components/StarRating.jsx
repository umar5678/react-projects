import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ starCount = 10 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currKey) {
    setRating(currKey);
  }

  function handleMouseEnter(currKey) {
    setHover(currKey);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="flex justify-center gap-1">
      {[...Array(starCount)].map(
        (_, index) => (
          (index += 1),
          (
            <FaStar
              key={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={` ${
                index <= (hover || rating) ? "text-amber-500" : "text-gray-200"
              } text-2xl text-gray-300`}
            />
          )
        )
      )}
    </div>
  );
};

export default StarRating;
