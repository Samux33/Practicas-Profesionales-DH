import SideBar from "./components/sidebar/sidebar";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Banner from "./assets/banner.jpg";
import List from "./components/aspirantsList/List";
function App() {
  return (
    <body className="flex">
      <SideBar />
      <div className="flex flex-col">
        <Header></Header>
        <main className="flex flex-1 flex-col right-0 p-16 bg-gray-100 gap-4">
          <Info
            title="Búsqueda y selección"
            text="Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos"
            img={Banner}
          ></Info>
          <h2 className="text-gray-400 font-semibold block text-4xl">
            Aspirantes
          </h2>
          <List></List>
        </main>
      </div>
    </body>
  );
}

export default App;
