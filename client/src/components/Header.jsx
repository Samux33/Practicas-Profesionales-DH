import SelectProfesion from "./SelectProfesion";
import FormSearch from "./FormSearch";
const Header = () => {
  return (
    <header className="w-auto h-16 flex border-b items-center">
      <nav className="flex items-center justify-between w-full gap-2 pl-12 pr-4 h-28">
        <div className="flex gap-8 items-center grow">
          <FormSearch />
          <SelectProfesion />
        </div>
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
