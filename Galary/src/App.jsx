import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const GetData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=10`,
      );

      setUserData(response.data);
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetData();
  }, [index]);

  return (
    <div className="bg-black min-h-screen p-4 text-white flex flex-col">
      {/* Image Section */}
      <div className="flex flex-wrap gap-7 p-7 justify-center flex-grow">
        {loading && <h3 className="text-xl text-gray-400">Loading...</h3>}

        {error && <h3 className="text-red-500">{error}</h3>}

        {!loading &&
          !error &&
          userData.map((elem) => (
            <div key={elem.id}>
              <a href={elem.url} target="_blank" rel="noopener noreferrer">
                <div className="h-52 w-56 rounded-xl bg-white overflow-hidden shadow-lg">
                  <img
                    className="h-full w-full object-cover"
                    src={elem.download_url}
                    alt={elem.author}
                  />
                </div>
                <h2 className="font-bold text-center mt-2 text-white">
                  {elem.author}
                </h2>
              </a>
            </div>
          ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center gap-6 p-4">
        <button
          className="bg-amber-300 text-black rounded px-4 py-2 active:scale-95 font-semibold disabled:opacity-50"
          disabled={index === 1}
          onClick={() => setIndex((prev) => prev - 1)}
        >
          Prev
        </button>

        <h1 className="text-2xl">{index}</h1>

        <button
          className="bg-amber-300 text-black rounded px-4 py-2 active:scale-95 font-semibold"
          onClick={() => setIndex((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
