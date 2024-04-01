import { useState, useEffect, useRef } from "react";

interface FetchDataResponse<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  isMounted: boolean;
}

const useFetchData = <T,>(): FetchDataResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await res.json();
        if (isMounted.current) {
          setData(jsonData?.user);
        }
      } catch (err: any) {
        setError(err);
      } finally {
        if (isMounted.current) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return { data, loading, error, isMounted: isMounted.current };
};

export default useFetchData;
