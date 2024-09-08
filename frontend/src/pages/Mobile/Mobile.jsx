import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { listBrandData } from '../../assets/data/listbBrandData';
import ListPhones from '../../components/ListPhones/ListPhones';
import { StoreConText } from '../../context/StoreConText';

const Mobile = () => {
    const { phones, filteredBrand, filteredData } = useContext(StoreConText);

    const [selectedBrand, setSelectedBrand] = useState(null);

    const handleBrandClick = (brand) => {
        filteredBrand(brand);
        setSelectedBrand(brand);
    };

    return (
        <>
            <Breadcrumbs />

            {/* List brand smartphone */}
            <div className="container py-5 overflow-hidden">
                <ul className="flex gap-2 md:gap-5 overflow-y-auto hide-scrollbar">
                    {listBrandData.map((brand) => (
                        <li
                            key={brand.id}
                            className={`w-24 h-8 border-[1px] flex-shrink-0 border-gray-300 bg-white rounded-md
                            ${
                                selectedBrand === brand.brand.toUpperCase()
                                    ? 'border-red-500'
                                    : ''
                            }`}
                        >
                            <Link>
                                <img
                                    onClick={() =>
                                        handleBrandClick(
                                            brand.brand.toUpperCase(),
                                        )
                                    }
                                    src={brand.image}
                                    alt={brand.name}
                                    className="w-full h-full object-contain rounded-md select-none"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* List Product */}
            <ListPhones />
        </>
    );
};

export default Mobile;
