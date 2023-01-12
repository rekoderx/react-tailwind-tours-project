import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section className="container m-4 mx-auto">
      <div className="mt-16">
        <h1 className="text-5xl font-bold text-center px-6 text-gray-700">
          Our Tours
        </h1>
        <div className="w-52 h-1 bg-gray-700 mx-auto my-4"></div>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
