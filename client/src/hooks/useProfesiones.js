import { useState, useEffect } from "react";
import { getProfesiones } from "../services/getProfesiones";

export function useProfesiones() {
  const [profesiones, setProfesiones] = useState([]);

  useEffect(() => {
    getProfesiones().then((result) => setProfesiones(result.data));
  }, []);
  return profesiones;
}
