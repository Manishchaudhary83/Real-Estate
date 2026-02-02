import React, { useEffect } from 'react';
import Header from './components/Header';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/TEstimonials';
import Contact from './components/Contact';
import { ToastContainer} from 'react-toastify';
import Footer from './components/Footer';


function App() {

  useEffect(() => {
    createChat({
      webhookUrl: 'https://manishchaudhary.app.n8n.cloud/webhook/654362d6-2a60-4695-b9b0-cf085180c4d3/chat',
    });
  }, []);

  return (
    <div className="w-full overflow-hidden">
      
      <ToastContainer/>
      <Header />
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
       <Footer/>
   
        
    </div>
  );
}

export default App;
