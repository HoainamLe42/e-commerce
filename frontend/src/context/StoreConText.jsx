import React, { createContext, useEffect, useState } from 'react';

import { fetchData } from '../api/phoneApi';

export const StoreConText = createContext(null);

const StoreConTextProvider = (props) => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Filtered
    const [filteredData, setFilteredData] = useState(phones);

    // Get data when component rendered first
    useEffect(() => {
        const getData = async () => {
            try {
                const apiData = await fetchData();
                setPhones(apiData);
            } catch {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    // ======================
    // 1. Hàm để lọc sản phẩm nổi bật
    const featuredPhones = Array.isArray(phones)
        ? phones.filter((phone) => phone.featured)
        : [];

    // 2. Hàm chuyển đổi đơn vị tiền

    const formattedPrice = (price) => {
        if (typeof price != 'number') {
            return 'Gía trị không hợp lệ!!!';
        }
        return price.toLocaleString('vi-VN') + ' đ';
    };

    // 3. Lọc sản phẩm theo thương hiệu
    const filteredBrand = (brand) => {
        const filtered = phones?.filter((value) =>
            value.brand.toUpperCase().includes(brand),
        );
        return setFilteredData(filtered);
    };

    // 4. Items trong giỏ hàng
    // add Items in cart
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({
                ...prev,
                [itemId]: 1,
            }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    useEffect(() => {
        console.log('Items ordered: ', cartItems);
    }, [cartItems]);

    // 5. Remove Item ra khỏi cart or giảm
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    // 6. Total price Items in cart
    const getTotalPrice = () => {
        let totalPrice = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = phones.find((phone) => phone.id === item);
                totalPrice += itemInfo.price * cartItems[item];
            }
        }
        return formattedPrice(totalPrice);

        console.log('Name: ', cartItems[item]);
        console.log('Total: ', formattedPrice(totalPrice));
    };

    // 7. Total items in cart
    const totalItemsInCart = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
        console.log('total: ', totalItems);
    };

    // ======================

    if (error) return <div>{error}</div>;
    if (loading) return <div>Loading.....</div>;

    const contextValue = {
        phones,
        setPhones,
        featuredPhones,
        formattedPrice,
        filteredBrand,
        setFilteredData,
        filteredData,
        addToCart,
        removeFromCart,
        cartItems,
        getTotalPrice,
        totalItemsInCart,
    };

    return (
        <StoreConText.Provider value={contextValue}>
            {props.children}
        </StoreConText.Provider>
    );
};

export default StoreConTextProvider;
