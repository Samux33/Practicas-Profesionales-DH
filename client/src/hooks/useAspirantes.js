import { useState, useEffect } from "react";
import { getAspirantes } from "../services/getAspirantes";

export function useAspirantes() {
  let [aspirantes, setAspirantes] = useState([]);

  useEffect(() => {
    getAspirantes().then((aspirante) => setAspirantes(aspirante.data));
  }, []);
  return aspirantes;
}
