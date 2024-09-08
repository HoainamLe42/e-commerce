import React from 'react';
import Slider from 'react-slick';

import { paymentOffersData } from '../../assets/data/paymentOffersData';

const PaymentOffers = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Hiển thị 3 card cùng lúc
        slidesToScroll: 1, // Trượt 1 card mỗi lần
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            <div className="container">
                <div className="bg-white shadow-xl rounded-3xl p-5">
                    <h2 className="text-2xl text-black font-medium">
                        {paymentOffersData.title}
                    </h2>

                    <Slider {...settings}>
                        {paymentOffersData.images.map((item) => (
                            <div key={item.id} className="p-2 overflow-hidden">
                                <img
                                    src={item.imgSrc}
                                    alt=""
                                    className="rounded-xl"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default PaymentOffers;
