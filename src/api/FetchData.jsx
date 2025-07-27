import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/data.json");
        setData(response.data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true)
        setLoading(false);
      }
    };

    fetchData();  
  }, []);

  return {data, loading, error}
};

export {FetchData};
