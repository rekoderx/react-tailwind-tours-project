import Tours from "./components/Tours";
import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setTours(data);
  };

  useEffect(() => {
    getTours();
  }, []);

  const removeTour = (id) => {
    const remainingTours = tours.filter((tour) => tour.id !== id);
    setTours(remainingTours);
  };

  if (tours.length === 0) {
    return (
      <main className="flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center px-6 text-gray-700">
          No Tours Left
        </h1>
        <button
          className="bg-cyan-600 text-white w-40 h-10 rounded-md my-4"
          onClick={getTours}
        >
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />;
    </main>
  );
}

export default App;
