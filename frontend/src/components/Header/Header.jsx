import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';

// Icons
import {
    FaSearch,
    FaRegUserCircle,
    FaShoppingBag,
    FaShippingFast,
    FaMapMarkerAlt,
} from 'react-icons/fa';
import { IoIosArrowForward, IoMdMenu } from 'react-icons/io';
import { LuMenuSquare } from 'react-icons/lu';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { StoreConText } from '../../context/StoreConText';
import OrderSummary from '../OrderSummary/OrderSummary';

const Header = () => {
    const [isMenu, seIsMenu] = useState(false);
    const { totalItemsInCart } = useContext(StoreConText);

    const showMenuMobile = (e) => {
        e.stopPropagation();
        seIsMenu(true);
    };

    const closeMenuMobile = () => {
        // e.stopPropagation();

        seIsMenu(false);
    };

    return (
        <header className="bg-primary py-2 md:py-0">
            <div className="container">
                <div className="grid grid-flow-col grid-rows-3 md:flex items-center justify-between h-[70px] md:h-[64px] py-2">
                    {/* Menu mobile */}
                    <div className="md:hidden w-[52px] row-span-3">
                        <IoMdMenu size={35} color="white" />
                    </div>

                    {/* Left group */}
                    <div className="col-span-3 mx-auto md:mx-0 row-span-1 md:flex md:gap-2 h-[30px] md:h-[44px]">
                        {/* LOGO */}
                        <Link to={'/'}>
                            <h1 className="text-lg md:text-3xl h-[100%] text-white flex items-center gap-2">
                                <i className="md:block font-bold">DIDONG</i>
                                <span className="border-[1px] border-white px-[4px]">
                                    N
                                </span>
                            </h1>
                        </Link>

                        {/* Select option */}
                        <div>
                            <div className="hidden md:flex items-center gap-2 h-[100%] bg-white/20 text-white py-1 px-2 rounded-md cursor-pointer transition-all duration-200">
                                <span>
                                    <LuMenuSquare className="text-xl" />
                                </span>
                                <p className="text-xs">Danh mục</p>
                            </div>
                        </div>

                        {/* Select location */}
                        <div>
                            <div className="hidden md:flex items-center gap-1 h-[100%] min-w-[118px] bg-white/20 text-white py-1 px-2 rounded-md cursor-pointer transition-all duration-200">
                                <span>
                                    <FaMapMarkerAlt className="text-xl" />
                                </span>
                                <p className="flex flex-col text-sm">
                                    <span className="text-xs flex gap-1">
                                        Xem giá tại
                                        <MdKeyboardArrowDown className="text-sm" />
                                    </span>
                                    Hồ Chí Minh
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Search Input */}
                    <div className="col-span-3 row-end-4 row-span-1 h-[34px] max-w-[300px] w-[100%] rounded-md overflow-hidden bg-white pl-8 pr-2 relative transition-all duration-200 mx-1">
                        <input
                            type="text"
                            placeholder="Bạn cần tìm gì?"
                            className="h-[100%] w-[100%]"
                        />
                        <span className="absolute left-2 translate-y-1/2">
                            <FaSearch className="text-secondary/70" />
                        </span>
                    </div>

                    {/* Right group */}
                    <div className="row-span-3 items-center flex gap-2 h-[44px]">
                        {/* Ship */}
                        <div>
                            <div className="hidden lg:flex items-center gap-2 h-[100%] min-w-[105px] hover:bg-white/20 text-white py-1 px-2 rounded-md cursor-pointer transition-all duration-200">
                                <span>
                                    <FaShippingFast className="text-xl" />
                                </span>
                                <p className="text-xs max-w-[60px] text-balance">
                                    Tra cứu đơn hàng
                                </p>
                            </div>
                        </div>

                        {/* Cart */}
                        <div className="relative group">
                            <Link
                                to={'/cart.html'}
                                className="flex flex-col md:flex-row items-center gap-2 h-[100%] hover:bg-white/20 text-white py-1 px-2 rounded-md cursor-pointer transition-all duration-200"
                            >
                                <span
                                    className={`relative ${
                                        totalItemsInCart() > 0
                                            ? 'before:absolute before:h-2 before:w-2 before:top-1/3 before:left-1/2 before:-translate-x-1/2 before:translate-y-1/2 before:bg-blue-500 before:rounded-full'
                                            : ''
                                    }`}
                                >
                                    <FaShoppingBag className="text-xl" />
                                </span>
                                <p className="text-xs">Giỏ hàng</p>
                            </Link>

                            {/* OrderSummary */}
                            <div className="absolute py-2 top-[100%] min-w-[300px] hidden right-0 z-[100] group-hover:block rounded-lg">
                                <OrderSummary />
                            </div>
                        </div>

                        {/* Sign-in && Sign-up */}
                        <div className="sm:flex hidden">
                            <div className="flex flex-col items-center min-w-[74px] bg-white/20 text-white py-1 px-2 rounded-md cursor-pointer">
                                <span>
                                    <FaRegUserCircle className="text-xl" />
                                </span>
                                <p className="text-xs">Đăng nhập</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
