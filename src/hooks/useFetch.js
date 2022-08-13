import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetch = () => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);

        console.log(response.data);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  };

  useEffect(() => {
    fetch();
  }, [url]);

  return { data, error, loading, fetch };
}
