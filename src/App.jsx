import { Route, Routes, useLocation } from 'react-router-dom';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { DarkModeProvider, useDarkMode } from './Context/DarkModeContext';
import Homes from './Routesow/Homes';
import Aboutes from './Routesow/Aboutes';
import { Skilles } from './Routesow/Skilles';
import Projectes from './Routesow/Projectes';
import Achievementes from './Routesow/Achievementes';

const AppContent = () => {
  const { isDarkMode } = useDarkMode();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useGSAP(() => {
    gsap
  });

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode
        ? 'bg-gray-900  hover:text-green-500 text-white'
        : 'bg-white  text-gray-900'
    }`}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homes />} />
        <Route path='/projects' element={<Projectes />} />
        <Route path='/skills' element={<Skilles />} />
        <Route path='/achievements' element={<Achievementes />} />
        <Route path='/about' element={<Aboutes />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
};

export default App;
