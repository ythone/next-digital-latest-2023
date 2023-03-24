import { useEffect, useState } from "react";
import Navbar from "./components/presentation/Navbar"
import { Route, Routes } from "react-router-dom";
import Acceuil from "./components/presentation/Acceuil";
import Services from "./components/presentation/Services/Services";
import Contact from "./components/presentation/Contact/Contact";
import Agence from "./components/presentation/Agence/Agence";
import Strategie from "./components/presentation/Services/Strategie/Strategie";
import Web_design from "./components/presentation/Services/Web_design/Web_design";
import SocialMedia from "./components/presentation/Services/SocialMedia/SocialMedia";
import Infographie from "./components/presentation/Services/Infographie/Infographie";
import Photographie from "./components/presentation/Services/Photographie/Photographie";
import Referencement from "./components/presentation/Services/Referencement/Referencement";
import SMSMarketing from "./components/presentation/Services/SMSMarketing/SMSMarketing";
import Communication from "./components/presentation/Services/Communication/Communication";


function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [is_connected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#191772]">
      <Routes>
        <Route path='/' element={<Acceuil isTopOfPage={isTopOfPage} />} />
        <Route path='/acceuil' element={<Acceuil isTopOfPage={isTopOfPage} />} />
        <Route path='/strategie' element={<Strategie/>} />
        <Route path='/web_design' element={<Web_design/>} />
        <Route path='/social' element={<SocialMedia/>} />
        <Route path='/infographie' element={<Infographie/>} />
        <Route path='/photographie' element={<Photographie/>} />
        <Route path='/referencement' element={<Referencement/>} />
        <Route path='/sms' element={<SMSMarketing/>} />
        <Route path='/communication' element={<Communication/>} />
        <Route path='/services' element={<Services isTopOfPage={isTopOfPage} />} />
        <Route path='/contact' element={<Contact isTopOfPage={isTopOfPage}/>} />
        <Route path='/agence' element={<Agence isTopOfPage={isTopOfPage}/>} />
      </Routes>
    </div>
  )
}

export default App
