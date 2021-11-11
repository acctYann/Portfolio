import "./index.css";
import { useState } from "react";

// Contexts
import LanguageContext from "./contexts/language-context";

// Containers
import Home from "./containers/Home";
import Projects from "./containers/Projects";
import Loader from "./containers/Loader";
import About from "./containers/About";
import StayInTouch from "./containers/StayInTouch";

// Components
import SocialNetworksLinks from "./components/SocialNetworksLinks";
import LanguageButton from "./components/LanguageButton";
import MailAddress from "./components/MailAddress";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

// Data
import textsJSON from "./utils/data/texts.json";

const App = () => {
  const [language, setLanguage] = useState(textsJSON.french);
  const [displayAnimation, setDisplayAnimation] = useState(true);

  return displayAnimation ? (
    <Loader setDisplayAnimation={setDisplayAnimation} />
  ) : (
    <main>
      <Logo />
      <SocialNetworksLinks />
      <LanguageContext.Provider value={language}>
        <LanguageButton setLanguage={setLanguage} />

        <Home />

        <About />

        <Projects />

        <StayInTouch />

        <Footer />
      </LanguageContext.Provider>
      <MailAddress />
    </main>
  );
};

export default App;
