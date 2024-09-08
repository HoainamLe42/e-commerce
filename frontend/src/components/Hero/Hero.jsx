import React from 'react';
import Slider from 'react-slick';

import { FaArrowCircleRight } from 'react-icons/fa';

import Img1 from '../../assets/images/hero/hero_1.png';
import Img2 from '../../assets/images/hero/hero_2.png';
import Img3 from '../../assets/images/hero/hero_3.png';
import bgImg1 from '../../assets/images/hero/bg_hero_1.png';
import bgImg2 from '../../assets/images/hero/bg_hero_2.png';
import bgImg3 from '../../assets/images/hero/bg_hero_3.png';

import lapTop from '../../assets/images/group/laptop.png';
import DT from '../../assets/images/group/dt.png';
import dongHo from '../../assets/images/group/dongho.png';
import mayTinhBang from '../../assets/images/group/maytinhbang.png';
import phuKien from '../../assets/images/group/phukien.png';

import titTokIcon from '../../assets/images/hero/tikTok_icon.png';

const listImg = [
    { id: 1, bgImg: bgImg1, image: Img1 },
    { id: 2, bgImg: bgImg2, image: Img2 },
    { id: 3, bgImg: bgImg3, image: Img3 },
];

const Hero = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        //         autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className="relative z-1">
            {/* Top section */}
            <div>
                <div className="bg-white shadow-md hidden sm:block">
                    <div className="container py-1 md:py-2">
                        <ul className="flex items-center gap-5">
                            <li>
                                <a
                                    href="!#"
                                    className="flex items-center gap-2 text-xs lg:text-sm"
                                >
                                    <img
                                        src={titTokIcon}
                                        alt=""
                                        className="w-5 lg:w-8"
                                    />
                                    Săn ngay Iphone 16 Pro Max chỉ từ 20.5 triệu
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#!"
                                    className="flex items-center gap-2"
                                >
                                    <span className="text-sm lg:text-2xl text-gray-500">
                                        <FaArrowCircleRight />
                                    </span>
                                    <span className="animate-pulse font-semibold text-sky-700 underline text-xs md:text-sm">
                                        Tham gia ngay !!!
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <Slider {...settings}>
                    {listImg.map((item, index) => (
                        <div
                            key={index}
                            className="relative z-10 transition-all duration-300 overflow-hidden"
                        >
                            <div className="h-[150px] xs:h-[220px] lg:h-[400px] relative flex items-center">
                                <img
                                    src={item.bgImg}
                                    alt=""
                                    className="w-[100%] max-h-[400px]"
                                />
                                <div className="absolute left-0 right-0">
                                    <div className="container h-auto w-full">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="h-auto object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Bottom section */}
                {/* <div className="">
                    <div className="container">
                        <h2 className="text-xl font-bold py-2">Danh Mục</h2>
                        <div className=" overflow-hidden">
                            <div className="flex overflow-y-auto sm:grid grid-col-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 font-bold">
                                <div className="">
                                    <div className="bg-white p-4 shadow-md rounded-xl group flex  flex-col overflow-hidden cursor-pointer">
                                        <h3>Điện thoại</h3>
                                        <div className="flex justify-end ]">
                                            <img
                                                src={DT}
                                                alt=""
                                                className="w-[60px] sm:w-[150px] h-auto flex-1 scale-75 object-contain group-hover:scale-90 transition-all duration-200"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="flex sm:grid grid-cols-1 lg:grid-rows-2 gap-4">
                                        <div className="bg-white p-4 shadow-md rounded-xl group flex h-[100px] overflow-hidden cursor-pointer">
                                            <h3 className="w-[70px] h-[60px] flex-1 line-clamp-2">
                                                Đồng hồ thông minh
                                            </h3>
                                            <div
                                                className="w-[60px] h-[58px] flex items-center
                                             justify-end"
                                            >
                                                <img
                                                    src={dongHo}
                                                    alt=""
                                                    className="object-contain group-hover:scale-105 transition-all duration-200"
                                                />
                                            </div>
                                        </div>
                                        <div className="bg-white p-4 shadow-md rounded-xl group flex h-[100px] overflow-hidden cursor-pointer">
                                            <h3 className="w-[70px] h-[60px] flex-1 line-clamp-2">
                                                Phụ kiện
                                            </h3>
                                            <div
                                                className="w-[60px] h-[58px] flex items-center
                                             justify-end"
                                            >
                                                <img
                                                    src={phuKien}
                                                    alt=""
                                                    className="object-contain group-hover:scale-105 transition-all duration-200"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-shrink-0">
                                    <div className="md:col-span-2 col-span-1 bg-white p-4 shadow-md rounded-xl group flex flex-col overflow-hidden cursor-pointer">
                                        <h3>Laptop</h3>
                                        <div className="flex justify-center">
                                            <img
                                                src={lapTop}
                                                alt=""
                                                className="w-[150px] h-auto object-contain md:scale-[140%] group-hover:scale-150 transition-all duration-200"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-shrink-0 w-[70px] sm:w-[150px] sm:h-auto">
                                    <div className="bg-white w-full h-full p-4 shadow-md rounded-xl group flex flex-col overflow-hidden cursor-pointer">
                                        <h3>Máy tính bảng</h3>
                                        <div className="flex justify-end">
                                            <img
                                                src={mayTinhBang}
                                                alt=""
                                                className="scale-75 object-contain group-hover:scale-90 transition-all duration-200"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Hero;
