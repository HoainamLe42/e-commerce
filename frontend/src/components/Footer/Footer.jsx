import React, { useState } from 'react';

// Icons
import {
    FaYoutube,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaCcVisa,
    FaCcApplePay,
    FaCcJcb,
    FaCcMastercard,
} from 'react-icons/fa';

import { footerData } from '../../assets/data/footerData';

const Footer = () => {
    const support = {
        title: 'Hỗ trợ thanh toán',
        links: [
            { name: 'Visa', icon: <FaCcVisa /> },
            { name: 'MasterCard', icon: <FaCcMastercard /> },
            { name: 'JCB', icon: <FaCcJcb /> },
            { name: 'ApplePay', icon: <FaCcApplePay /> },
        ],
    };

    return (
        <footer className="py-10 bg-black/80">
            <div className="container">
                {/* Top section */}
                <div className="flex flex-col items-center md:flex-row justify-center md:justify-between gap-2 gap-y-3 text-white">
                    <div>
                        <p className="text-lg text-center md:text-left">
                            Hệ thống DIDONG Shop trên toàn quốc
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                            Bao gồm Cửa hàng DIDONG Shop, Trung tâm Laptop,
                            S.Studio, Garmin Brand Store
                        </p>
                    </div>

                    <div>
                        <button
                            onClick={() => alert('soon...')}
                            className="bg-primary/90 py-2 px-3 rounded-full text-nowrap"
                        >
                            Xem danh sách cửa hàng
                        </button>
                    </div>
                </div>
                <div className="my-4 h-[1px] w-full bg-gray-400"></div>

                {/* Bottom section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white mt-5 gap-y-4">
                    {/* Col 1 */}
                    <div>
                        <h3 className="uppercase font-semibold">
                            Kết nối với didong shop
                        </h3>
                        {/* Group social media */}
                        <div className="flex items-center gap-3 my-3">
                            <FaInstagram className="text-xl text-orange-600 cursor-pointer" />
                            <FaFacebook className="text-xl text-brandBlue cursor-pointer" />
                            <FaYoutube className="text-xl text-primary cursor-pointer" />
                            <FaTwitter className="text-xl text-brandBlue cursor-pointer" />
                        </div>

                        <div className="text-sm mt-5">
                            <h4 className="uppercase text-sm font-semibold">
                                Tổng đài miễn phí
                            </h4>
                            <ul className="mt-2 flex flex-col gap-2">
                                <li className="flex flex-col">
                                    <span>Tư vấn mua hàng (Miễn phí)</span>
                                    <a href="#!" className="text-white">
                                        <b>1800.6868</b> (Nhánh 1)
                                    </a>
                                </li>

                                <li className="flex flex-col">
                                    <span>Hỗ trợ kỹ thuật</span>
                                    <a href="#!" className="text-white">
                                        <b>1800.6868</b> (Nhánh 2)
                                    </a>
                                </li>

                                <li className="flex flex-col">
                                    <span>Góp ý, khiếu nại</span>
                                    <a href="#!" className="text-white">
                                        <b>1800.6868</b> (8h00 - 22h00)
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h3 className="uppercase font-semibold">
                            {footerData.about.title}
                        </h3>
                        <ul className="mt-2 flex flex-col gap-2">
                            {footerData.about.links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="#!"
                                        className="text-white text-sm hover:underline"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h3 className="uppercase font-semibold">
                            {footerData.services.title}
                        </h3>
                        <ul className="mt-2 flex flex-col gap-2">
                            {footerData.services.links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="#!"
                                        className="text-white text-sm hover:underline"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 */}
                    <div>
                        <h3 className="uppercase font-semibold">
                            {support.title}
                        </h3>
                        <ul className="mt-2 flex gap-2 flex-wrap max-w-[200px]">
                            {support.links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="#!"
                                        className="text-white text-4xl hover:underline"
                                    >
                                        {link.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
