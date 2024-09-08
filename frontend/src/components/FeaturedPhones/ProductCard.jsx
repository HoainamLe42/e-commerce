import React from 'react';
import { useNavigate } from 'react-router-dom';

// React icons
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';

const ProductCard = ({ id, name, price, color }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail/${id}`);
    };

    const formattedPrice = price.toLocaleString('vi-VN') + ' đ';

    return (
        <div className="relative flex-1 flex-shrink-0 max-w-[300px] mx-2 rounded-lg overflow-hidden">
            <div className="p-4 bg-white shadow-xl">
                {/* Tag sale off */}
                <div className="bg-primary inline-flex text-white text-sm px-4 py-1 absolute top-0 left-0 rounded-r-full shadow-xl">
                    <p>Giảm 12%</p>
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
                    <p className="text-primary font-bold">{formattedPrice}</p>
                    <p className="text-xs text-secondary/80">
                        Smember giảm thêm đến
                        <span className="ml-2 text-sm text-primary font-bold">
                            280.000 đ
                        </span>
                    </p>

                    {/* Group rating & like */}
                    <div className="flex items-center gap-1 justify-between mt-2  md:mt-5">
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
        </div>
    );
};

export default ProductCard;
