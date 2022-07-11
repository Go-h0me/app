import { Tooltip } from '@material-tailwind/react';

import React, { useState } from 'react';
import InputReward from './inputReward';

export default function StakeGeek() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="rounded-md dark:bg-gray-800 shadow  ">
                <div className="flex items-center justify-between px-4 py-6">
                    <div className="flex ">
                        <span>
                            <img className="mr-2 h-6 w-6" src="/logo192.png" alt="" />
                        </span>
                        <span className="text-base font-bold"> Geek</span>
                    </div>
                    <div className="hidden lg:block">
                        <div className="mb-3 text-xs font-medium sm:text-sm">
                            <Tooltip
                                className="h-64 w-60 bg-indigo-400 p-2 text-left text-[10px]"
                                content="By staking crypto, holders of cryptocurrencies are able to generate returns on certain cryptocurrencies without trading in exchange for depositing a stake.

                                                             Every crypto holder who deposits coins in a staking pool can function as a validator and receive the right to add a new transaction to a blockchain.

                                          Staking rewards are subject to fluctuation depending on the number of staking participants that are staking, transaction volume and other factors. 

                                                  Researching a coin and being aware of potential risks are important before you begin to stake. ">
                                <div className="flex">
                                    <span>Rewards</span>

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                </div>
                            </Tooltip>
                        </div>
                        <span className="text-sm sm:text-base">O GEEK</span>
                    </div>
                    <div>
                        <div className="mb-3 text-xs font-medium sm:text-sm">
                            {' '}
                            <Tooltip
                                className="h-32 w-60 bg-indigo-400 p-2 text-left text-[10px]"
                                content="The term “staking” is derived from the concept of putting something (in our case coins or tokens) “at stake”, which means that you place a portion of your crypto assets in a staking pool for a set amount of time.">
                                <div className="flex">
                                    <span>Staked</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                </div>
                            </Tooltip>
                        </div>
                        <span className="text-sm sm:text-base">O GEEK</span>
                    </div>
                    <div>
                        <div className="mb-3 text-xs font-medium sm:text-sm">
                            {' '}
                            <Tooltip
                                className="h-60  w-60 bg-indigo-400 p-2 text-[10px]"
                                content="The extrapolated premiums displayed are calculated from the time-weighted average of the latest 17 epochs' premiums. If there were epochs that ended with a negative return, the yield for that epoch is counted as 0% for the purposes of this extrapolation, but the negative PnL is not included in the calculation. For calculations inclusive of epochs with losses, see the analytics page. APY depends on market conditions. Past performance is no guarantee of future results.">
                                <div className="flex">
                                    <span>APR</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                </div>
                            </Tooltip>
                        </div>
                        <span className="text-sm sm:text-base">10.30%</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="space-y-2 text-xs font-medium sm:text-sm ">
                            {' '}
                            <Tooltip
                                className="h-64 w-60 bg-indigo-400 p-2 text-[10px]"
                                content="Total Value Locked or TVL is a formula that shows the total value of all crypto assets locked up (or staked) in a Defi (decentralized finance) protocol. TVL is often used to represent the total activity, interest and even value of a Defi protocol for potential investors. This number is usually represented in USD, although some protocols represent the number in total ETH or BTC value.">
                                <div className="flex">
                                    <span>Total staked</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                </div>
                            </Tooltip>
                        </div>
                        <div className="text-sm sm:text-base">
                            <i>~$15,123,456</i>
                        </div>
                        <span className="text-sm sm:text-base">33,000,001 GEEK</span>
                    </div>
                    <div className="mr-4 md:mr-6 lg:mr-8">
                        <button onClick={() => setShow(!show)}>
                            {!show ? (
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            ) : (
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 hover:text-gray-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                                    </svg>
                                </span>
                            )}
                        </button>
                    </div>
                </div>
                <div>{show ? <InputReward /> : null}</div>
            </div>
        </>
    );
}
