import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// React icons
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';

const CardItem = ({
    id,
    name,
    price,
    color,
    screenSize,
    storage,
    sale,
    discount,
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail/${id}`);
    };

    const formattedPrice = price.toLocaleString('vi-VN') + ' đ';

    return (
        <li className="relative flex-1 flex-shrink-0 h-full rounded-lg overflow-hidden">
            <div className="p-[6px] sm:p-2 md:p-4 bg-white shadow-xl h-full">
                {/* Tag sale off */}

                <div>
                    {sale ? (
                        <p className="bg-primary inline-flex text-white text-sm px-4 py-1 absolute top-0 left-0 rounded-r-full shadow-xl">
                            Giảm {discount}%
                        </p>
                    ) : (
                        ''
                    )}
                </div>

                <div
                    onClick={handleClick}
                    className="flex items-center justify-center my-2 cursor-pointer"
                >
                    <img src={color} alt="" className="w-[160px]" />
                </div>

                <div className="flex flex-col gap-y-1">
                    <h3 className="text-sm text-secondary font-bold capitalize mb-3">
                        {name}
                    </h3>

                    {/* Product badge */}
                    <div className="flex gap-1 lg:gap-3">
                        <p className="text-[11px] py-[1px] px-[3px] rounded-md border-[1px] border-gray-400">
                            {screenSize}
                        </p>
                        <p className="text-[11px] py-[1px] px-[3px] rounded-md border-[1px] border-gray-400">
                            {storage}
                        </p>
                    </div>

                    <p className="text-primary font-bold text-nowrap">
                        {formattedPrice}
                    </p>
                    <p className="text-xs text-secondary/80">
                        Smember giảm thêm đến
                        <span className="ml-2 text-sm text-primary font-bold text-nowrap">
                            280.000 đ
                        </span>
                    </p>

                    {/* Group rating & like */}
                    <div className="flex items-center gap-1 justify-between mt-2 md:mt-5">
                        <div className="flex gap-1 text-xs md:text-lg">
                            <FaStar className="text-brandYellow" />
                            <FaStar className="text-brandYellow" />
                            <FaStar className="text-brandYellow" />
                            <FaStar className="text-brandYellow" />
                            <FaStar className="text-brandYellow" />
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="hidden md:block text-xs text-secondary/80">
                                Yêu thích
                            </span>

                            <div>
                                <button className="flex items-center text-xl text-primary group">
                                    <FaRegHeart />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CardItem;
