import { useEffect, useState } from 'react';

// Used this YT video to create: https://www.youtube.com/watch?v=Jl4q2cccwf0

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // setTimeout(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not get data');
        }
        return res.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setisPending(false);
        setError(null);
      })
      .catch((err) => {
        setisPending(false);
        setError(err.message);
      });
    // }, 0);
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
