import { useState, useEffect } from "react";
import { getAspirantes } from "../services/getAspirantes";

export function useAspirantes({ search }) {
  const [aspirantes, setAspirantes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAspirantes({ search }).then((result) => {
      !result.success ? setError(result.error) : setError(null);
      setAspirantes(result.data);
    });
  }, [search]);
  return { aspirantes, error };
}
