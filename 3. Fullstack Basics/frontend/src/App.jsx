import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        console.log(res);
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="bg-gray-900 text-white h-screen w-screen flex justify-center items-center flex-col">
      <h1 className="text-5xl text-center pt-10">Chai Aur Code Frontend</h1>
      <p className="text-xl mt-5">Jokes : {jokes.length}</p>
      {jokes.map((joke) => {
        return <p key={joke.id}>{joke.joke}</p>;
      })}
    </div>
  );
}

export default App;
