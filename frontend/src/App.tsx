import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/v1/dogs")
      .then((res) => res.json())
      .then((data) => {
        console.log("FROM BACKEND:", data);
        setBackendData(data);
      })
      .catch((err) => {
        console.error("FETCH ERROR:", err);
      });
  }, []);

  return (
    <div>
      <pre>{JSON.stringify( backendData, null, 2 )}</pre>
    </div>
  );
}

export default App;
