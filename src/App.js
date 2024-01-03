import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Aksesoris } from "./components/Aksesoris";
import { Gadget } from "./components/Gadget";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Aksesoris />
      <Gadget />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
