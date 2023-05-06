import "bootstrap/dist/css/bootstrap.min.css";
import "react-popupbox/dist/react-popupbox.css";
import "./App.css";
import "reactjs-popup/dist/index.css";
import Navigation from "./components/Navbar";
import Header from "./components/Header";
import ParticlesBackground from "./components/ParticlesBackground";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ParticlesBackground />
      <Navigation />
      <Header />
      <AboutMe />
      <Portfolio />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
