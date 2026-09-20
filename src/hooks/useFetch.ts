import { useEffect, useState } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url, {
          headers: {
            Authorization: "Bearer rc_live_bfb78855a9334e6c8b89c06c7821937c",
          },
        });

       if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
            errorData.errors?.[0]?.message || `HTTP Error: ${response.status}`
        );
       }

        const result = await response.json();

        setData(result);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
