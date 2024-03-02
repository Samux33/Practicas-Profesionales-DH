// Componentes
import SideBar from "./components/sidebar";
import Header from "./components/Header";
import About from "./components/About";
import Banner from "./assets/banner.jpg";
import AspirantesList from "./components/AspirantesList";
import Title from "./components/Title";
import ProfesionesTable from "./components/ProfesionesTable";
import CreateAspiranteForm from "./components/CreateAspiranteForm";

// Utils
import { Routes, Route } from "react-router-dom";
import { FiltersProvider } from "./context/filterAspirantes";

function App() {
  return (
    <main className="cuerpo">
      <SideBar />
      <div className="flex flex-col w-min col-span-1 lg:w-full">
        <FiltersProvider>
          <Header />
          <main className="flex flex-1 flex-col right-0 p-16 bg-gray-100 gap-4 items-center">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <About
                      title="Búsqueda y selección"
                      text="Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos"
                      img={Banner}
                    />
                    <Title text="Aspirantes" />
                    <AspirantesList />
                    <Title text="Profesiones" />
                    <ProfesionesTable />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <About
                    title="Búsqueda y selección"
                    text="Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos"
                    img={Banner}
                  />
                }
              />
              <Route path="/aspirantes" element={<AspirantesList />} />
              <Route path="/profesiones" element={<ProfesionesTable />} />
              <Route path="/form" element={<CreateAspiranteForm />} />
            </Routes>
          </main>
        </FiltersProvider>
      </div>
    </main>
  );
}

export default App;
