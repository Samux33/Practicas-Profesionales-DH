import SideBar from "./components/sidebar/sidebar";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Banner from "./assets/banner.jpg";
import AspirantesList from "./components/aspirantesList/AspirantesList";
import Title from "./components/title/Title";
import ProfesionesTable from "./components/profesionesTable/ProfesionesTable";
function App() {
  return (
    <main className="flex">
      <SideBar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col right-0 p-16 bg-gray-100 gap-4">
          <Info
            title="Búsqueda y selección"
            text="Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos"
            img={Banner}
          />
          <Title text="Aspirantes" />
          <AspirantesList />
          <Title text="Profesiones" />
          <ProfesionesTable />
        </main>
      </div>
    </main>
  );
}

export default App;
