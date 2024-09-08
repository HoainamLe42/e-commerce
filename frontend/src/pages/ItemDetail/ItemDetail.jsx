import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

// Icons
import { FaCartPlus } from 'react-icons/fa';

import { StoreConText } from '../../context/StoreConText';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductCard from '../../components/FeaturedPhones/ProductCard';

const ItemDetail = () => {
    const { id } = useParams();
    const { phones, formattedPrice, addToCart } = useContext(StoreConText);

    const item = phones?.find((phone) => phone.id.toString() === id);

    // Set selected image
    const [mainImage, setMainImage] = useState(item?.colors[0]?.image);
    const [selectedImage, setSelectedImage] = useState(item?.colors[0].image);

    const handleThumbnailClick = (image) => {
        setMainImage(image);
        setSelectedImage(image);
    };

    const filteredProducts = phones?.filter(
        (phone) => phone.brand === item?.brand,
    );

    return (
        <div>
            <Breadcrumbs />
            <div className="container py-5">
                {/* Details phones */}
                <div className="grid lg:grid-cols-2 sm:gap-5">
                    <div className="grid grid-rows-3  sm:grid-rows-6 gap-y-5 lg:h-auto">
                        {/* Col-1 */}
                        <div className="row-start-1 row-span-2 sm:row-span-5">
                            <div className="p-3 sm:p-10 flex items-center justify-center h-[300px] w-[80vw] mx-auto sm:h-full sm:w-full bg-white shadow-md rounded-lg">
                                <img
                                    src={mainImage}
                                    alt=""
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Col-2 */}
                        <div className="row-end-4 row-span-1 sm:row-end-8 sm:row-span-2">
                            <ul className="flex flex-wrap gap-2">
                                {item?.colors?.map((color, index) => (
                                    <li
                                        key={color.name}
                                        onClick={() =>
                                            handleThumbnailClick(color.image)
                                        }
                                        className={`${
                                            selectedImage === color.image
                                                ? ' border-red-500'
                                                : ''
                                        } h-[60px] w-[60px] sm:h-[100px] sm:w-[100px] flex-shrink-0 object-center p-2 sm:p-5 bg-white shadow-md rounded-lg cursor-pointer overflow-hidden hover:border-red-500 border-2`}
                                    >
                                        <img
                                            src={color.image}
                                            alt=""
                                            className="hover:scale-110 transition-all duration-300"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Item details */}
                    <div className="p-4 lg:px-10">
                        <div>
                            <h2 className="text-2xl font-bold">{item.name}</h2>
                            <p className="text-primary font-semibold text-lg">
                                {formattedPrice(item.price)}
                            </p>

                            <p className="font-bold text-lg mt-4 mb-2">
                                Chọn màu để xem
                            </p>

                            <div>
                                <ul className="flex flex-wrap gap-3">
                                    {item.colors.map((color, index) => (
                                        <li
                                            key={index}
                                            onClick={() =>
                                                handleThumbnailClick(
                                                    color.image,
                                                )
                                            }
                                            className={`${
                                                selectedImage === color.image
                                                    ? 'border-red-500'
                                                    : ''
                                            } p-3 h-[46px] flex items-center gap-2 border-[1px] border-gray-300 rounded-md cursor-pointer`}
                                        >
                                            <img
                                                src={color.image}
                                                alt=""
                                                className="h-full"
                                            />
                                            <div className="text-xs">
                                                <p className="font-bold">
                                                    {color.name}
                                                </p>
                                                <p className="text-nowrap">
                                                    {formattedPrice(item.price)}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Button */}
                            <div className="flex items-center gap-4 my-4">
                                <button className="uppercase w-full rounded-lg text-white text-[16px] h-14 py-3 px-5 bg-primary hover:scale-105 transition-all duration-300 font-bold">
                                    Mua ngay
                                </button>

                                <div
                                    onClick={() => addToCart(id)}
                                    className="h-14 w-14 flex flex-col items-center justify-center rounded-lg flex-shrink-0 border-2 border-red-500 cursor-pointer"
                                >
                                    <FaCartPlus
                                        size={22}
                                        color="red"
                                        className="flex-shrink-0"
                                    />
                                    <span className="text-[8px] text-red-500 font-bold">
                                        Thêm vào giỏ
                                    </span>
                                </div>
                            </div>

                            <p className="font-bold text-lg mt-4 mb-2">
                                Thông số kỹ thuật
                            </p>
                            <div className="border-[1px] border-gray-200">
                                <div className="p-4 flex justify-between bg-gray-200">
                                    <p>Kích thước màn hình</p>
                                    <p>{item?.specs.screenSize}</p>
                                </div>
                                <div className="p-4 flex justify-between bg-white">
                                    <p>Camera trước</p>
                                    <p>{item?.specs.camera}</p>
                                </div>
                                <div className="p-4 flex justify-between bg-gray-200">
                                    <p>Dung lượng RAM</p>
                                    <p>{item?.specs.storage}</p>
                                </div>
                                <div className="p-4 flex justify-between bg-white">
                                    <p>Pin</p>
                                    <p>{item?.specs.battery}</p>
                                </div>
                                <div className="p-4 flex justify-between bg-gray-200">
                                    <p>Hệ điều hành</p>
                                    <p>{item?.specs.os}</p>
                                </div>
                                <div className="p-4 flex justify-between bg-white">
                                    <p>Hãng sản xuất</p>
                                    <p>{item?.brand}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="">
                    <h3 className="uppercase text-lg font-bold mt-5">
                        SẢN PHẨM TƯƠNG TỰ
                    </h3>

                    {/* Similar products */}
                    <div className="mt-5">
                        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-2">
                            {filteredProducts?.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    color={item.colors[0]?.image}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
