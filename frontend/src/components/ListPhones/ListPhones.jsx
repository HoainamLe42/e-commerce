import React, { useContext, useEffect, useState } from 'react';
import { StoreConText } from '../../context/StoreConText';
import CardItem from './CardItem';

const ListPhones = () => {
    const { phones, filteredData, setFilteredData } = useContext(StoreConText);

    useEffect(() => {
        setFilteredData(phones);
    }, []);

    const productsToDisplay = filteredData.length > 0 ? filteredData : phones;

    return (
        <div className="container pb-10">
            {/* Top section */}
            <div>
                <h2 className="text-lg text-secondary/80 font-semibold mb-4">
                    Sắp xếp theo
                </h2>

                {/* Filter price Low - High */}
                <div className="overflow-hidden">
                    <ul className="flex gap-2 overflow-y-auto hide-scrollbar">
                        <li className="capitalize text-xs bg-gray-200 rounded-md border-[1px] border-gray-300 inline-flex items-center p-2 text-nowrap cursor-pointer">
                            Giá cao - thấp
                        </li>
                        <li className="capitalize text-xs bg-gray-200 rounded-md border-[1px] border-gray-300 inline-flex items-center p-2 text-nowrap cursor-pointer">
                            Giá thấp - cao
                        </li>

                        <li className="capitalize text-xs bg-gray-200 rounded-md border-[1px] border-gray-300 inline-flex items-center p-2 text-nowrap cursor-pointer">
                            Khuyến mãi hot
                        </li>

                        <li
                            onClick={() => setFilteredData(phones)}
                            className="capitalize text-xs bg-gray-200 rounded-md border-[1px] border-gray-300 inline-flex items-center p-2 text-nowrap cursor-pointer"
                        >
                            Tất cả
                        </li>
                    </ul>
                </div>
            </div>

            {/* List item */}
            <div className="mt-5">
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-2">
                    {productsToDisplay.map((item) => (
                        <CardItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            color={item.colors[0].image}
                            screenSize={item.specs.screenSize}
                            storage={item.specs.storage}
                            sale={item.sale}
                            discount={item.discountPercentage}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ListPhones;
