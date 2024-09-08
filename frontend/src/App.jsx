import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Mobile from './pages/Mobile/Mobile';
import Cart from './pages/Cart/Cart';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
    return (
        <>
            <Header />
            <ScrollToTop />
            <main className="bg-bgMain">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mobile.html" element={<Mobile />} />
                    <Route path="/cart.html" element={<Cart />} />
                    <Route path="/detail/:id" element={<ItemDetail />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
};

export default App;
