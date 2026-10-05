
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { NameContext } from './contaxt API/UserContext.jsx';
import { MovieProvider, } from './contaxt API/MovieContext.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <NameContext>
    <MovieProvider>
      
         <App />
    </MovieProvider>
  
  </NameContext>
    
  </BrowserRouter>,
)
