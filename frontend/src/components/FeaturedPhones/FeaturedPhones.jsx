import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const listHangDT = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'samsung' },
    { id: 3, name: 'xiaomi' },
    { id: 4, name: 'oppo' },
    { id: 5, name: 'realme' },
];

import ProductCard from './ProductCard';
import { StoreConText } from '../../context/StoreConText';

const FeaturedPhones = () => {
    const { phones, featuredPhones } = useContext(StoreConText);

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Hiển thị 4 card cùng lúc
        slidesToScroll: 1, // Trượt 1 card mỗi lần
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            // {
            //     breakpoint: 480, // Tương ứng với màn hình nhỏ hơn
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //     },
            // },
        ],
    };

    return (
        <section className="py-4 sm:py-8">
            <div className="container">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-2 xl:gap-3 sm:gap-y-2 overflow-hidden">
                    <a className="text-[22px] text-secondary uppercase font-bold text-nowrap">
                        <h3>Điện thoại nổi bật nhất</h3>
                    </a>

                    {/* Brand List */}
                    <div className="flex items-center justify-end h-[40px] flex-nowrap">
                        <ul className="flex gap-2 md:gap-4 overflow-y-auto hide-scrollbar">
                            {listHangDT.map((item) => (
                                <li
                                    key={item.id}
                                    className="capitalize text-sm bg-gray-200 p-1 sm:p-2 rounded-md border-[1px] border-gray-300"
                                >
                                    <a href="#!">{item.name}</a>
                                </li>
                            ))}

                            <Link
                                to={'/mobile.html'}
                                className="text-sm bg-gray-200 p-1 sm:p-2 rounded-md border-[1px] border-gray-300 text-nowrap"
                            >
                                Xem tất cả
                            </Link>
                        </ul>
                    </div>
                </div>

                {/* List product */}
                <div className="py-5">
                    <div>
                        <Slider {...settings}>
                            {featuredPhones.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    color={item.colors[0].image}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedPhones;
