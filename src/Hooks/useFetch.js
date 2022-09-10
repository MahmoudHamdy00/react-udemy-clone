import axios from "axios";
import { useCallback, useEffect, useState } from "react";
function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const fetchData = useCallback( () => {
    setIsLoading(true);
    setHasError(false);
    try {
      axios.get(url)
      .then((res=>setData(res.data)));
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
    // console.log('data :>> ', data);
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [url, fetchData]);
  return { data, isLoading, hasError };
}

export default useFetch;
