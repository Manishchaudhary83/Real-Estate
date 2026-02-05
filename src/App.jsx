import React, { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from "./components/Testimonials";
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';



function App() {
   useEffect(() => {
  createChat({
    webhookUrl: 'https://manishchaudhary.app.n8n.cloud/home/chat/67c00d94-260c-4c68-9e0c-89565f680811',
  });
}, []);


  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
