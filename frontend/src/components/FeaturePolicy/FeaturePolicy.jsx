import React from 'react';
import { featurePolicyData } from '../../assets/data/featurePolicyData';

const FeaturePolicy = () => {
    return (
        <div className="py-10">
            <div className="container">
                <ul className="grid gird-col-1 md:grid-cols-4 gap-2 md:gap-0">
                    {featurePolicyData.map((item) => (
                        <li
                            key={item.id}
                            className="flex flex-col items-center text-sm"
                        >
                            <img src={item.icon} alt="" className="w-15" />
                            <p className="font-semibold mt-3">{item.title}</p>
                            <p className="text-center">{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FeaturePolicy;
