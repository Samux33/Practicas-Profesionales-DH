import SideBar from "./components/sidebar/sidebar";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Banner from "./assets/banner.jpg";
function App() {
  return (
    <body className="flex">
      <SideBar />
      <main className="flex flex-1 flex-col right-0 w-3/4">
        <Header></Header>
        <Info
          title="Búsqueda y selección"
          text="Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos"
          img={Banner}
        ></Info>
      </main>
    </body>
  );
}

export default App;
