import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import type { Dog } from "./types/dog.ts";

function App() {
  const [array, setArray] = useState<Dog[]>([]);

  const fetchAPI = async () => {
    try {  
      const response = await axios.get("http://localhost:3000/api/v1/dogs");
      setArray(response.data);
      console.log("FULL DATA:", response.data);
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
