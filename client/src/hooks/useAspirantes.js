import { useState, useEffect, useContext } from "react";
import { getAspirantes } from "../services/getAspirantes";
import { SearchContext } from "../context/searchAspirantes";

export function useAspirantes() {
  const { search } = useContext(SearchContext);
  const [aspirantes, setAspirantes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("getAspirantes ejecutado");
    getAspirantes({ search }).then((result) => {
      !result.success ? setError(result.error) : setError(null);
      setAspirantes(result.data);
    });
  }, [search]);
  return { aspirantes, error };
}
