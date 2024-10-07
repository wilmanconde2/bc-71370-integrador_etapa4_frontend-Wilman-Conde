import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/index.scss';
import { ProductosProvider } from './context/ProductosContext.jsx';
import { CarritoProvider } from './context/CarritoContext.jsx';
const urlPROD = import.meta.env.VITE_BACKSERVER_PRODUCTS;
const urlCART = import.meta.env.VITE_BACKSERVER_CARRITO;
const urlAPI = import.meta.env.VITE_API_KEY;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductosProvider>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </ProductosProvider>
  </StrictMode>,
);

export default {
  urlPROD,
  urlCART,
  urlAPI
};
