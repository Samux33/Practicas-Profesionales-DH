import DHlogo from "../assets/logo-dh.png";
import NavRow from "./NavRow";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <aside className="flex flex-col bg-white border-r h-screen max-w-72 pr-6 span-1">
      <Link to="/">
        <section className="flex max-w-full justify-start gap-2 p-6 items-center mb-12">
          <img
            src={DHlogo}
            alt="logo de digital house"
            className=" w-12 h-auto"
          />
          <h2 className=" font-bold text-sm">Digital House</h2>
        </section>
      </Link>
      <nav className="pl-10 flex flex-col gap-3">
        <h2 className="text-blue-500 font-semibold">OPCIONES</h2>
        <ul className="flex flex-col gap-2">
          <NavRow
            iconType="regular"
            icon="building"
            iconColor="blue-500"
            text="Empresas"
            url="/about"
          ></NavRow>
          <NavRow
            iconType="regular"
            icon="user"
            iconColor="blue-500"
            text="Aspirantes"
            url="/aspirantes"
          ></NavRow>
          <NavRow
            iconType="solid"
            icon="list-check"
            iconColor="gray-400"
            text="Profesiones"
            url="/profesiones"
          ></NavRow>
          <NavRow
            iconType="solid"
            icon="address-card"
            iconColor="blue-500"
            text="Postulate aquí"
            url="/form"
          ></NavRow>
          <NavRow
            iconType="solid"
            icon="comment-dots"
            iconColor="gray-400"
            text="Contacto"
          ></NavRow>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
