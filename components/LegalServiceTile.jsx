import React from 'react';

const LegalServiceTile = ({ imageSrc, serviceName, serviceDescription }) => {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <img
                src={imageSrc}
                alt={serviceName}
                className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{serviceName}</h2>
            <p className="text-gray-600">{serviceDescription}</p>
        </div>
    );
};

const LegalServices = () => {
    const legalServices = [
        {
            imageSrc: '/images/corporate.png', // Replace with your image path
            serviceName: 'Business Incorporation',
            serviceDescription: 'Assist in registering and incorporating businesses with the appropriate legal structure.',
        },
        {
            imageSrc: '/images/contract.png', // Replace with your image path
            serviceName: 'Contract Drafting and Review',
            serviceDescription: 'Provide legal expertise in drafting, reviewing, and negotiating contracts.',
        },
        // Add more services here
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {legalServices.map((service, index) => (
                <LegalServiceTile
                    key={index}
                    imageSrc={service.imageSrc}
                    serviceName={service.serviceName}
                    serviceDescription={service.serviceDescription}
                />
            ))}
        </div>
    );
};

export default LegalServices;
