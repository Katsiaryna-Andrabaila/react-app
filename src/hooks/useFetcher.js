import { useState } from "react";

export const useFetcher = (cb) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetcher = async () => {
    try {
      setIsLoading(true);
      await cb();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetcher, isLoading, error];
};
