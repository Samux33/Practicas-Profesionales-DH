import { useContext } from "react";
import { SearchContext } from "../context/searchAspirantes";

const Header = () => {
  // recuperar el método para cambiar el estado global de search
  const {setSearch}=useContext(SearchContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    // recuperar el campo del input usando javascript
    const fields = new window.FormData(event.target);
    const searchParam=fields.get('searchParam')
    //asignar el valor del input al estado global search
    setSearch(searchParam)
  };

  return (
    <header className="w-auto h-16 flex border-b items-center">
      <nav className="flex items-center justify-between w-full gap-2 pl-12 pr-4 h-28">
        <form className="flex gap-0.5 items-center" onSubmit={handleSubmit}>
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass text-blue-500 fa-lg"></i>
          </button>
          <input
            type="text"
            name="searchParam"
            className="h-8 focus:bg-gray-100 p-3 border border-gray-950 rounded-lg"
          />
        </form>
        <ul className="flex gap-6 pr-12">
          <li>
            <a href="">
              <i className="fa-solid fa-user-plus text-blue-500"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-solid fa-arrow-right-from-bracket text-blue-500"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-regular fa-user text-blue-500"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
