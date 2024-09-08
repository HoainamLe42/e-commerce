import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreConText } from '../../context/StoreConText';

const OrderSummary = () => {
    const { phones, cartItems, totalItemsInCart } = useContext(StoreConText);

    return (
        <div className="p-5 bg-gray-200 rounded-lg shadow-lg">
            {totalItemsInCart() > 0 ? (
                <>
                    <ul className="flex flex-col">
                        {phones.map((item) => {
                            if (cartItems[item.id] > 0) {
                                return (
                                    <li className="flex items-center justify-between py-2 border-b-[1px] border-gray-300 last:border-none">
                                        <p className="font-bold flex items-center gap-2">
                                            {item.name}
                                            <span className="font-normal text-xs">
                                                x{cartItems[item.id]}
                                            </span>
                                        </p>
                                        <img
                                            src={item.colors[0].image}
                                            alt={item.name}
                                            className="w-10 bg-white p-1 rounded-md shadow-md"
                                        />
                                    </li>
                                );
                            }
                        })}
                    </ul>
                    <Link
                        to={'/cart.html'}
                        className="bg-red-500 w-full flex justify-center items-center py-2 text-white"
                    >
                        Thanh toán ngay
                    </Link>
                </>
            ) : (
                <p>Chưa có sản phẩm</p>
            )}
        </div>
    );
};

export default OrderSummary;
