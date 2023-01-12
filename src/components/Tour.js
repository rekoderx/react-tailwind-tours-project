import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <article className="shadow-slate-300 shadow-md my-12 w-96 md:w-96 mx-auto rounded-lg">
      <div>
        <img src={image} alt={name} className="rounded-t-md w-full h-80" />
        <div className="p-12">
          <div className="flex justify-between">
            <h4 className="font-bold text-lg tracking-wider text-gray-800">
              {name}
            </h4>
            <span className="font-bold text-sky-500">${price}</span>
          </div>
          <p className="py-6 text-sky-900 leading-6 font-light tracking-wide">
            {readMore ? `${info.substring(0, 200)}...` : info}
            <button
              className="text-sky-500"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read More" : "Show Less"}
            </button>
          </p>
          <button
            className="bg-cyan-600 text-white w-40 h-10 rounded-md"
            onClick={() => removeTour(id)}
          >
            Not Interested
          </button>
        </div>
      </div>
    </article>
  );
};

export default Tour;
