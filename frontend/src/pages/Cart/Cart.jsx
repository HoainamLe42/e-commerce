import React, { useContext } from 'react';
// Icons
import { FaArrowLeft } from 'react-icons/fa';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import './cart.scss';
import { StoreConText } from '../../context/StoreConText';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {
        phones,
        formattedPrice,
        addToCart,
        removeFromCart,
        cartItems,
        getTotalPrice,
        totalItemsInCart,
    } = useContext(StoreConText);

    const filtered = phones.filter((phone) => phone.brand === 'Apple');

    return (
        <div className="container py-5 md:py-10">
            <h2 className="text-2xl font-bold mb-3">Đơn hàng của bạn</h2>

            {totalItemsInCart() > 0 ? (
                <div>
                    {/* Top section */}
                    <div className="bg-white shadow-lg rounded-lg p-5 ">
                        <div className="hidden md:block">
                            <div className="cart-items border-b-2">
                                <p>Item</p>
                                <p>Tên sản phẩm</p>
                                <p>Giá</p>
                                <p>Số lượng</p>
                                <p>Tổng</p>
                                <p>Xoá</p>
                            </div>
                        </div>
                        {/* List items ordered */}
                        <ul>
                            {phones.map((item, index) => {
                                if (cartItems[item.id] > 0) {
                                    return (
                                        <li
                                            key={item.id}
                                            className="cart-items items-center py-2"
                                        >
                                            <img
                                                src={item.colors[0].image}
                                                alt={item.name}
                                                className="flex-shrink-0 w-10 p-1 bg-white border-[1px] border-gray-200 rounded-lg"
                                            />
                                            <p className="text-sm text-[16px]">
                                                {item.name}
                                            </p>
                                            <p className="hidden md:block text-nowrap">
                                                {formattedPrice(item.price)}
                                            </p>
                                            <p className="flex gap-2">
                                                <span
                                                    onClick={() =>
                                                        addToCart(item.id)
                                                    }
                                                    className="inline-flex items-center justify-center h-6 w-6 bg-white border-[1px] border-gray-200 rounded-md cursor-pointer select-none"
                                                >
                                                    +
                                                </span>

                                                {cartItems[item.id]}
                                                <span
                                                    onClick={() =>
                                                        removeFromCart(item.id)
                                                    }
                                                    className="inline-flex items-center justify-center h-6 w-6 bg-white border-[1px] border-gray-200 rounded-md cursor-pointer select-none"
                                                >
                                                    -
                                                </span>
                                            </p>
                                            <p className="text-nowrap">
                                                {formattedPrice(
                                                    item.price *
                                                        cartItems[item.id],
                                                )}
                                            </p>
                                            <p
                                                onClick={() =>
                                                    removeFromCart(item.id)
                                                }
                                                className="hidden md:block cursor-pointer p-2"
                                            >
                                                x
                                            </p>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </div>

                    {/* Bottom section */}
                    <div className="mt-4">
                        <div className="flex gap-y-3 flex-col md:flex-row justify-between">
                            <div className="order-2 md:order-1 flex items-end">
                                <Link
                                    to={'/'}
                                    className="flex items-center gap-4 cursor-pointer hover:underline"
                                >
                                    <FaArrowLeft className="text-gray-600 text-lg md:text-xl" />
                                    <button className="text-gray-600 text-sm md:text-xl">
                                        Trở về trang chủ
                                    </button>
                                </Link>
                            </div>

                            <div className="order-1 md:order-2 w-full md:w-[40%] flex flex-col gap-2 bg-white shadow-lg p-5 rounded-lg">
                                <div className="flex flex-col justify-between">
                                    <p className="font-bold">Tên sản phẩm</p>

                                    {phones.map((item, index) => {
                                        if (cartItems[item.id]) {
                                            return (
                                                <div
                                                    key={index}
                                                    className="flex justify-end gap-2"
                                                >
                                                    <span className="font-semibold">
                                                        x{cartItems[item.id]}
                                                    </span>
                                                    <span
                                                        key={index}
                                                        className="flex flex-col text-right"
                                                    >
                                                        {item.name}
                                                    </span>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="flex justify-between pt-2 border-t-2 border-gray-300">
                                    <p className="font-bold text-lg uppercase">
                                        Tổng
                                    </p>
                                    <span className="font-bold">
                                        {getTotalPrice()}
                                    </span>
                                </div>
                                <div>
                                    <button className="bg-red-500 text-white p-3 w-full rounded-lg hover:scale-105 transition-all duration-200">
                                        Thanh toán ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center gap-3">
                    <p className="text-lg font-bold">
                        Bạn chưa có sản phẩm nào!
                    </p>

                    <Link to={'/'} className="text-red-500 underline">
                        Mua ngay
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
