import DHlogo from "../../assets/logo-dh.png";
import NavRow from "./navrow";
const SideBar = () => {
  return (
    <aside className="flex flex-col bg-white border-r fixed top-0 left-0 h-full w-1/4">
      <section className="flex max-w-full justify-start gap-2 p-6 items-center mb-12">
        <img
          src={DHlogo}
          alt="logo de digital house"
          className=" w-12 h-auto"
        />
        <h2 className=" font-bold text-xs ">Digital House</h2>
      </section>
      <nav className="pl-10 flex flex-col gap-3">
        <h2 className="text-blue-500 font-semibold">OPCIONES</h2>
        <ul className="flex flex-col gap-2">
          <NavRow iconType="regular" icon="building" iconColor="blue-500" text="Empresas"></NavRow>
          <NavRow iconType="regular" icon="user" iconColor="blue-500" text="Aspirantes"></NavRow>
          <NavRow iconType="solid" icon="list-check" iconColor="gray-400" text="Profesiones"></NavRow>
          <NavRow iconType="solid" icon="address-card" iconColor="blue-500" text="Postulate aquí"></NavRow>
          <NavRow iconType="solid" icon="comment-dots" iconColor="gray-400" text="Contacto"></NavRow>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
