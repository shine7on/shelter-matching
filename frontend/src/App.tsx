import { useEffect, useState } from "react";
import "./App.css";
import type { Dog } from "./types/dog.ts";
import { fetchDogs } from "./services/api/dogs";


function App() {
  const [array, setArray] = useState<Dog[]>([]);

  const fetchAPI = async () => {
    try {  
      const dogs = await fetchDogs();
      setArray(dogs);
      console.log("FULL DATA:", dogs);
    } catch (err) {
      console.log("REQUEST FAILED:", err);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      {
      array.map ((dog) => (
        <div key = {dog._id}>
          <p>{dog.name}</p>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default App;
