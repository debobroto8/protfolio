import './App.css';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Component/Navber/Header/Header';
import Services from './Component/Navber/Services/Services';
import About from './Component/Navber/About/About';
import Contact from './Component/Contact/Contact';
import Leyout from './Leyout';

function App() {
  return (
    <>
     <motion.div
       initial={{ opacity: 0, y:200 }}      // শুরুতে নিচে ও ফিকে
      animate={{ opacity: 1, y: 0 }}  
      // whileHover={{ scale:1.1 }}     // ওপরে উঠে স্পষ্ট হবে
      transition={{ duration: 0.4 }} 
    >
       <Routes>
        <Route path="/" element={<Leyout />}>
          <Route index element={<Header />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

    </motion.div>
     

    </>
  );
}

export default App;
