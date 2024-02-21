import { useContext } from "react";
import { SearchContext } from "../context/searchAspirantes";
const FormSearch = () => {
  const { setSearch } = useContext(SearchContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    // recuperar el campo del input usando javascript
    const fields = new window.FormData(event.target);
    const searchParam = fields.get("searchParam");
    //asignar el valor del input al estado global search
    setSearch(searchParam);
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <div className="flex gap-1">
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass text-blue-500 fa-lg"></i>
        </button>
        <input
          type="text"
          name="searchParam"
          className="h-8 focus:bg-gray-100 p-3 border border-gray-950 rounded-lg"
        />
      </div>
    </form>
  );
};
export default FormSearch;
