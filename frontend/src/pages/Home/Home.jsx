import React from 'react';

import Hero from '../../components/Hero/Hero';
import FeaturedPhones from '../../components/FeaturedPhones/FeaturedPhones';
import FeaturePolicy from '../../components/FeaturePolicy/FeaturePolicy';
import PaymentOffers from '../../components/PaymentOffers/PaymentOffers';

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedPhones />
            <PaymentOffers />
            <FeaturePolicy />
        </>
    );
};

export default Home;
