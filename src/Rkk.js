import React, { useState, useEffect } from "react";

export default function Rkk() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
  
      }
    };

    fetchData();
    return () => {
      
    };
  }, []); 

return (
    <div>
      {data ? (
        <p>Data: {JSON.stringify(data)}</p>
      ) : (
        <p>Loading...!!!</p>
      )}
    </div>
  );
}
