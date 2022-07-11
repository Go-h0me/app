import { useEffect, useState } from 'react';
import ConnectModal from './connectModal';

export default function InputReward() {
    const [isOpen, setIsOpen] = useState(false);

    //     useEffect(()=>{
    // setIsOpen(true)
    //     },[])
    // if (isOpen) {
    //     return null;
    //   }
    return (
        <section className="py-4 px-4  sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-5 md:space-y-0 rounded bg-white px-4 py-2 dark:bg-gray-900 md:grid md:grid-cols-2 md:divide-x-2 md:divide-white">
                <div className="flex items-center justify-between">
                    <div className="space-y-2 px-4  sm:px-6 lg:px-8">
                        <div className="text-xs md:text-sm">Deposited</div>
                        <div className="text-sm font-bold md:text-base lg:text-lg">0 GEEK</div>
                        <div>--</div>
                    </div>
                    <div className="">
                        <button
                            onClick={() => {
                                setIsOpen(true);
                            }}
                            className="hover:text-graay-100 rounded-md border-2 bg-indigo-600 px-4 py-2 text-xs font-normal text-white 
                          transition duration-300 ease-out hover:scale-95 hover:bg-indigo-700   hover:text-gray-100 md:text-sm lg:text-base
                             ">
                            Connect Wallet
                        </button>
                        {isOpen && <ConnectModal setOpenModal={setIsOpen} />}
                    </div>
                </div>
                <div className="ml-0 flex items-center justify-between md:ml-4">
                    <div className="space-y-2 px-4  sm:px-6 lg:px-8">
                        <div className="text-xs md:text-sm">Pending Rewards </div>
                        <div className="text-sm font-bold md:text-base lg:text-lg">0 GEEK</div>
                        <div>--</div>
                    </div>
                    <div className="">
                        <button
                            onClick={() => {
                                setIsOpen(true);
                            }}
                            className="hover:text-graay-100 rounded-md border-2 bg-indigo-600 px-4 py-2 text-xs font-normal text-white 
                       transition duration-300 ease-out hover:scale-95 hover:bg-indigo-700   hover:text-gray-100 md:text-sm lg:text-base
                                ">
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
