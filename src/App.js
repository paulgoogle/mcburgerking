import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Location from "./components/Location";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import OpeningHours from "./components/OpeningHours";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <Menu />
        <AboutUs />
        <Location />
        <OpeningHours />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
