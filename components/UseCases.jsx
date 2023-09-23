import React from 'react';
import { useCases } from '@/components/dependency.js';

const UseCases = () => {
    return (
        <div className='bg-[#f5f5f5] w-full py-12' id='usecases'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h1 className='text-2xl sm:text-3xl font-bold my-4'>Use Cases</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {useCases.map((item) => (
                        <div key={item.id} className='bg-white shadow-md p-4 rounded-lg'>
                            <span className='bg-blue-300 text-white rounded p-2'>{item.id}</span>
                            <h2 className='text-lg font-semibold my-2'>{item.title}</h2>
                            <p className='text-gray-700'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UseCases;
