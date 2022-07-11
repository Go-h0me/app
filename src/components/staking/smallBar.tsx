import { useState } from 'react';

export default function SmallBar({onSearchSubmit}) {
    const [searchText, setSearchText] = useState('');

    return (
        <>
            <div className="mx-auto  grid grid-cols-1  gap-6  lg:grid-cols-2  ">
                <div className="flex items-center justify-start space-x-1">
                    {['all', 'Active', 'Ended', 'MyStake', 'Stable', 'Double'].map((b) => (
                        <div key={b} defaultValue={b} className="flex items-center ">
                            <button className="rounded-md  border-2 border-indigo-500 bg-indigo-500  px-2 py-1.5 text-xs font-medium text-white transition duration-300 ease-out hover:scale-105 hover:bg-white hover:text-indigo-500 focus:border-indigo-500 focus:bg-white focus:text-indigo-500 sm:text-sm md:text-base lg:px-4  lg:text-lg">
                                {b}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="max-w-full lg:flex lg:items-center lg:justify-end   ">
                    <form>
                        {/* <label htmlFor="search" className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Search
                            </label> */}
                        <div className="relative mx-auto ">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
                                    <svg className="h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                                <input
                                    onChange={({ target: { value } }) => setSearchText(value)}
                                    value={searchText}
                                    type="search"
                                    id="search"
                                    className="block w-full  rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-14 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:max-w-md "
                                    placeholder="Search All"
                                    required
                                />
                           
                        </div>
                    </form>
                    <button onClick={() => onSearchSubmit(searchText)}>
                        Search
                    </button>

                </div>
            </div>
        </>
    );
}
