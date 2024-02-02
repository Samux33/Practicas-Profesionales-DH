import DHlogo from '../assets/logo-dh.png'

const SideBar = () => {
  return (
    <aside>
      <img src={DHlogo} alt="logo de digital house"/>
      <h2>Digital House</h2>
      <nav>
        OPCIONES
        <ul>
          <li>
            <a href=""><i className="fa-solid fa-building"></i> - Empresas</a>
          </li>
          <li>
            <a href=""><i className="fa-solid fa-user"></i> - Aspirantes</a>
          </li>
          <li>
            <a href=""><i className="fa-solid fa-list-check"></i> - Profesiones</a>
          </li>
          <li>
            <a href=""><i className="fa-solid fa-address-card"></i> - Postulate aquí</a>
          </li>
          <li>
            <a href=""><i className="fa-solid fa-comment-dots"></i> - Contacto</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar