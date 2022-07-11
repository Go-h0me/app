/* This example requires Tailwind CSS v2.0+ */
import { Tooltip } from '@material-tailwind/react';
import { useState } from 'react';
import { BsChevronExpand } from 'react-icons/bs';
import SmallBar from './smallBar';

const pool = [
    {
        id: 1,
        nm: 'GEEK',
        nm2: 'USD',
        tvl: 33000001,
        apr: 10.21,
        stake: 0,
        reward: 0,
        img: '1.webp',
    },
    // More people...
];

const searchCourse = async (hash) => { //Phan Search
    const re = /[0-9A-Fa-f]{6}/g;

    if (hash && hash.length === 66 && re.test(hash)) {
    //   const course = await contract.methods.getCourseByHash(hash).call();
    //   if (course.owner !== "0x000000000000000000000000000000000000000000") {
    //     const normalized = normalizeOwnedCourse(web3)({ hash }, course);
    //     setSearchedCourse(normalized);
    //     // console.log(normalized);

        return;
      }
      searchCourse(hash)
    }
    // setSearchedCourse(null);

export default function Pools() {
    const [show, setShow] = useState(false);


   

    return (
        <div className="px-4 sm:px-6 lg:px-8 scroll-y-auto scroll-smooth">
            <div className="header  flex items-center justify-between  px-2 sm:px-4 lg:px-6">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold ">Pools</h1>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <div
                        className="   text-sm 
                    font-medium text-indigo-500 transition duration-300
                    ease-in-out hover:scale-95   hover:text-gray-500 md:text-base lg:text-lg">
                        <a href="">
                            <div className="flex items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6   " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <span>Create Pool</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="content py-8 lg:py-12">
                <SmallBar   onSearchSubmit={searchCourse} />
            </div>

            <div className="footer">
                <div className="flex items-center justify-between px-4 py-6">
                    <div className="flex items-center">
                        <span className="ml-8   text-base font-semibold  lg:text-xl">Pair</span>
                        <span className="mt-1 ml-1">
                            <BsChevronExpand />
                        </span>
                    </div>
                    <div className="hidden lg:block">
                        <div className="flex items-center">
                            <span className="text-base font-semibold  lg:text-xl">Rewards</span>
                            <span className="mt-1 ml-1">
                                <BsChevronExpand />
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <span className="text-base font-semibold  lg:text-xl">Staked</span>
                            <span className="mt-1 ml-1">
                                <BsChevronExpand />
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <span className="text-base  font-semibold lg:text-xl">APR</span>
                            <span className="mt-1 ml-1">
                                <BsChevronExpand />
                            </span>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center">
                            <span className="text-base font-semibold  lg:text-xl">Total TVL</span>
                            <span className="mt-1 ml-1">
                                <BsChevronExpand />
                            </span>
                        </div>
                    </div>
                    <div className="mr-4 md:mr-6 lg:mr-8"></div>
                </div>
                <div className="mt-1 space-y-5">
                    <div className="rounded-md dark:bg-gray-800 shadow  ">
                        <div className="flex items-center justify-between px-4 py-6">
                            {pool.map((p) => (
                                <>
                                    <div key={p.id} className="flex items-center">
                                        <div className="flex items-center">
                                            <span>
                                                <img className="z-40 h-6 w-6 rounded-full" src="/logo192.png" alt="" />
                                            </span>
                                            <span>
                                                <img className="z-40 h-6 w-6 rounded-full  " src="/1.webp" alt="" />
                                            </span>
                                        </div>

                                        <div className="ml-3 space-y-2 text-base font-bold lg:text-xl">
                                            <span>{p.nm}</span>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                                </svg>
                                            </span>
                                            <span>{p.nm2}</span>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block">
                                        <div className="text-sm sm:text-base lg:text-xl">
                                            <span>{p.reward} </span>
                                            <span >GEEK / Day</span>
                                        </div>
                                    </div>
                                    <div className="text-sm sm:text-base lg:text-xl">
                                        <span>{p.stake}</span>
                                        {` `}
                                        <span>GEEK</span>
                                    </div>
                                    <div className="flex">
                                        <div className=" text-sm sm:text-base lg:text-xl">
                                            <div className="flex items-center ">
                                                <span>{p.apr}</span>
                                                <span>%</span>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="text-sm sm:text-base  lg:text-xl ">
                                            <span>{p.tvl}</span>
                                            <span> GEEK</span>
                                        </div>
                                    </div>
                                    <div className="mr-4 md:mr-6 lg:mr-8">
                                        <button onClick={() => setShow(!show)}>
                                            {show ? (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 hover:text-gray-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                                                    </svg>
                                                </span>
                                           
                                            ) : (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </span>
                                            )}
                                        </button>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div>
                            {show ? (
                                <section className="py-4 px-4  sm:px-6 lg:px-8">
                                    <div className="flex flex-col space-y-5 sm:space-y-0 rounded bg-white px-4 py-2 dark:bg-gray-900 md:grid md:grid-cols-2 md:divide-x-2 md:divide-white">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-2 px-4  sm:px-6 lg:px-8">
                                                <div className="text-xs md:text-sm">Your Liquidity</div>
                                                <div className="text-sm font-bold md:text-base lg:text-lg">0 GEEK</div>
                                                <div>--</div>
                                            </div>
                                            <div className="flex items-center">
                                                <button
                                                    className=" rounded-md border-2 bg-indigo-600 px-4 py-2 text-xs font-normal 
                                           text-white transition duration-300 ease-out hover:scale-95   hover:bg-indigo-700 hover:text-gray-100 md:text-sm lg:text-base
                                            ">
                                                    Stake
                                                </button>
                                                {/* <Tooltip content="swap">
                                            <span className="ml-2 rounded-md bg-indigo-500 p-2 text-white transition duration-300 ease-in hover:scale-105 hover:bg-indigo-700 hover:text-gray-500">
                                                <a href="/swap">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                                    </svg>
                                                </a>
                                            </span>
                                        </Tooltip> */}
                                            </div>
                                        </div>
                                        <div className="ml-0 flex items-center justify-between md:ml-4">
                                            <div className="space-y-2 px-4  sm:px-6 lg:px-8">
                                                <div className="text-xs md:text-sm">Pending Rewards </div>
                                                <div className="text-sm font-bold md:text-base lg:text-lg">0 GEEK</div>
                                                <div>--</div>
                                            </div>
                                            <div className="flex items-center">
                                                <button
                                                    className="hover:text-graay-100 hover: rounded-md border-2 bg-indigo-600 px-4 py-2 text-xs font-normal 
                                                 text-white transition duration-300 ease-out hover:scale-95 hover:bg-indigo-700 hover:text-gray-100 md:text-sm lg:text-base
                                                          ">
                                                    <span className="inline-flex">Un Stake</span>
                                                </button>
                                                <Tooltip content="swap">
                                                    <span className="ml-2 rounded-md bg-indigo-600 p-2 text-white  transition duration-300 ease-in hover:scale-105 hover:bg-indigo-700 hover:text-gray-100">
                                                        <a href="/swap">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6  " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                                            </svg>
                                                        </a>
                                                    </span>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
