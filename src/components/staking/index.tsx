import InputReward from './inputReward';
import Pools from './pools';
import { useState } from 'react';
import StakeGeek from './StakeGeek';

/* This example requires Tailwind CSS v2.0+ */
const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Staking() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="px-4  sm:px-6 lg:px-8  ">
                <div className="px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold ">Staking</h1>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:flex-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </div>
                </div>
                <div className="mt-4 ">
                    <StakeGeek/>
                </div>
            </div>
            <div className="md:py-16 py-12 ">
                <Pools />
            </div>
        </div>
    );
}
