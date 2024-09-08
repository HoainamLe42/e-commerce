import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import StoreConTextProvider from './context/StoreConText.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StoreConTextProvider>
            <App />
        </StoreConTextProvider>
    </BrowserRouter>,
);
