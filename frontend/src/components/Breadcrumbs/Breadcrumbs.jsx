import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Icons
import { IoHome } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((e) => e);

    const breadcrumbNameMap = {
        '': 'Trang chủ',
        'mobile.html': 'Điện thoại',
        'cart.html': '',
    };
    return (
        <nav className="bg-gray-100 shadow-xl">
            <div className="container py-[2px] sm:py-2">
                <ul className="flex items-center">
                    <li className="flex items-center">
                        <Link to={'/'} className="flex items-center gap-2">
                            <IoHome size="15" color="red" />
                            <span className="text-sm text-gray-500 mt-[3px]">
                                {breadcrumbNameMap['']}
                            </span>
                        </Link>
                    </li>

                    {pathnames.map((value, index) => {
                        var to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;
                        const name = breadcrumbNameMap[value] || value;

                        return (
                            <li key={to} className="flex items-center">
                                <IoIosArrowForward className="mx-2 mt-[1px]" />
                                {isLast ? (
                                    <span className="text-sm text-gray-500">
                                        {name}
                                    </span>
                                ) : (
                                    <Link
                                        to={to}
                                        className="text-gray-700 hover:text-blue-600"
                                    >
                                        {name}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
