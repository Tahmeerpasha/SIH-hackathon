'use client'
import React, { useState } from 'react';
import { services } from './dependency';

const ServiceListing = () => {
    const [showMoreCorporate, setShowMoreCorporate] = useState(false);
    const [showMoreIndividual, setShowMoreIndividual] = useState(false);
    const maxLines = 4; // Define the maximum number of lines to display initially

    const toggleShowMoreCorporate = () => {
        setShowMoreCorporate(!showMoreCorporate);
    };

    const toggleShowMoreIndividual = () => {
        setShowMoreIndividual(!showMoreIndividual);
    };

    const displayCorporateServices = showMoreCorporate
        ? services.corporate
        : services.corporate.slice(0, maxLines);

    const displayIndividualServices = showMoreIndividual
        ? services.individual
        : services.individual.slice(0, maxLines);

    return (
        <div className="container mx-auto py-8 " id='services'>
            <h2 className="text-2xl font-semibold text-center mb-6">Legal Services Provided By Us</h2>
            <div>
                <h3 className="text-xl font-semibold text-center mb-4">Corporate Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {displayCorporateServices.map((service, index) => (
                        <div key={index} className="bg-white shadow-md p-4 rounded-lg">
                            <h4 className="text-lg font-semibold mb-2">{service.name}</h4>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
                {!showMoreCorporate && services.corporate.length > maxLines && (
                    <button
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer mx-auto block"
                        onClick={toggleShowMoreCorporate}
                    >
                        {showMoreCorporate ? 'Show Less' : 'Read More'}
                    </button>
                )}
            </div>
            <div className="mt-8">
                <h3 className="text-xl font-semibold text-center mb-4">Individual Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {displayIndividualServices.map((service, index) => (
                        <div key={index} className="bg-white shadow-md p-4 rounded-lg">
                            <h4 className="text-lg font-semibold mb-2">{service.name}</h4>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
                {!showMoreIndividual && services.individual.length > maxLines && (
                    <button
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer mx-auto block"
                        onClick={toggleShowMoreIndividual}
                    >
                        {showMoreIndividual ? 'Show Less' : 'Read More'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ServiceListing;

