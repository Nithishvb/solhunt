"use client";

import { useState, useEffect } from "react";

export interface FetchState {
  data: any;
  loading: boolean;
  error: string | null;
}

export const useFetch = (url: string) => {
  const [state, setState] = useState<FetchState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: "Error fetching data" });
      }
    };

    fetchData();
  }, [url]);

  return state;
};
