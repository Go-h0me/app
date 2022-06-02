import { Fragment, SetStateAction, useEffect, useState } from 'react';

import { ChainId } from '@sushiswap/core-sdk';

import { Menu, Transition } from '@headlessui/react';
import { MdMoreVert, MdOutlineNotificationsActive, MdOutlineAutoStories, MdExpandMore } from 'react-icons/md';

import { useWeb3React } from '@web3-react/core';

import { formatEther } from '@ethersproject/units';

// import useDarkMode from '../helper/dark';

// import { ssrMode } from "../helper/ssr";

// import { dispatch } from 'use-bus'

import { injected } from '../helper/connectors';
import useStore from '../helper/store';
import { shorted } from '../helper';
import { NETWORK_LABEL, SUPPORTED_NETWORKS } from '../constants';
// import useStore from '@morioh/r-store';
// import { emit } from '@morioh/r-bus'

export default function Navbar() {
    const { active, account, library, connector, activate, deactivate, chainId } = useWeb3React();

    const [isConnected, setIsConnected] = useStore('web3connected');
    // const { isDarkMode, toggle } = useDarkMode();

    const [isDarkMode, setDarkMode] = useStore<boolean>('dark', false);

    async function connect() {
        try {
            await activate(injected);
            setIsConnected(1);
        } catch (ex) {
            console.log(ex);
        }
    }

    const switchToNetwork = async (key: number) => {
        console.debug(`Switching to chain ${key}`, SUPPORTED_NETWORKS[key]);

        const params = SUPPORTED_NETWORKS[key];
        try {
            await library?.send('wallet_switchEthereumChain', [{ chainId: `0x${key.toString(16)}` }, account]);
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            // @ts-ignore TYPE NEEDS FIXING
            if (switchError.code === 4902) {
                try {
                    await library?.send('wallet_addEthereumChain', [params, account]);
                } catch (addError) {
                    // handle "add" error
                    console.error(`Add chain error ${addError}`);
                }
            }
            console.error(`Switch chain error ${switchError}`);
            // handle other "switch" errors
        }
    };

    // const toggleDarkMode = () => setDarkMode((prev: boolean) => !prev);

    useEffect(() => {
        if (isConnected) {
            connect();
        }

        // library.eth.subscribe('newBlockHeaders').on('data', (block)=>{

        //     console.log(block);
        // });
    }, []);

    // fetch eth balance of the connected account
    const [ethBalance, setEthBalance] = useState(0);
    useEffect(() => {
        if (library && account) {
            let stale = false;

            library
                .getBalance(account)
                .then((balance: SetStateAction<number>) => {
                    if (!stale) {
                        setEthBalance(balance);
                    }
                })
                .catch(() => {
                    if (!stale) {
                        setEthBalance(0);
                    }
                });

            return () => {
                stale = true;
                setEthBalance(0);
            };
        }
    }, [library, account, chainId]);

    // useEffect(() => {

    //     library.eth.getBalance(account);

    // }, [library]);

    // console.log(library);

    document.documentElement.classList.toggle('dark', isDarkMode);

    // if (!ssrMode) {
    //     document.documentElement.classList.toggle('dark', isDarkMode);
    // }

    const submit = () => {
        // dispatch({ type: 'show', data: ['submit'] })
    };

    return (
        <div className="fixed top-0 z-20 w-full bg-white shadow transition dark:bg-gray-800 dark:text-gray-100">
            <div className="w-full px-2 sm:px-4">
                <div className="relative flex h-15 items-center justify-between space-x-4">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 space-x-4">
                            <a href="/">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275.14 311.36" className="h-10 w-auto" fill="currentColor">
                                    <path
                                        d="M427.07,385.5,310,453.09a20.51,20.51,0,0,1-20.5,0L172.43,385.5a20.51,20.51,0,0,1-10.25-17.75V232.56a20.5,20.5,0,0,1,10.25-17.75L289.5,147.22a20.51,20.51,0,0,1,20.5,0l117.07,67.59a20.5,20.5,0,0,1,10.25,17.75V367.75A20.51,20.51,0,0,1,427.07,385.5ZM235.18,319.78c5.29-20.82,10.51-41.65,15.85-62.46.3-1.53.88-3.09.45-4.66-1.42-6.08-3.3-12-4.76-18.1-11.5-.28-23,0-34.51-.06C219.75,263,227.3,291.42,235.18,319.78ZM267,311.49c-2.71-8.88-4.46-18-7.43-26.79-5.59,19.72-10.08,39.72-15.4,59.53-2.54,7.31,1.79,14.52,3.29,21.6,10.9,0,21.81.22,32.71-.14,6.62-21.7,12.87-43.52,19.65-65.17,6.74,21.61,13.12,43.34,19.57,65,10.91.67,21.86.15,32.79.29,1.45-6.11,4.91-12.33,3.07-18.7-5.08-20.93-9.83-41.95-15-62.87-2.94,9.35-4.83,19-7.63,28.39-6.7-25.95-12.28-52.18-18.88-78.14-9.05,0-18.12-.35-27.16.25C280,260.32,273.91,286,267,311.49Z"
                                        transform="translate(-162.18 -144.47)"
                                        style={{ fill: '#fff' }}
                                    />
                                    <path
                                        d="M352.8,234.55c11.5-.17,23-.07,34.49-.05q-11.46,43.35-23.09,86.66c-5.08-20.74-9.8-41.56-14.86-62.29-.5-2.46-1.66-5-.84-7.53C349.83,245.72,351.46,240.17,352.8,234.55Z"
                                        transform="translate(-162.18 -144.47)"
                                        style={{ fill: '#f89623' }}
                                    />
                                </svg> */}

                                <span className="sr-only">Workflow</span>
                                <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
                            </a>
                        </div>
                    </div>

                    <div className="hidden flex-1 justify-start md:flex">
                        <div className="flex space-x-4">
                            <a href="" className="rounded px-4 py-2 font-normal transition hover:bg-gray-700 hover:text-white">
                                Swap
                            </a>

                            <a href="https://wiki.geek.gl" className="rounded px-4 py-2 font-normal transition hover:bg-gray-700 hover:text-white">
                                Staking
                            </a>

                            <a href="" className="rounded px-4 py-2 font-normal transition hover:bg-gray-700 hover:text-white">
                                Earn
                            </a>
                            <a href="" className="cursor-pointer rounded border border-indigo-500 px-4 py-2 font-normal transition hover:bg-indigo-500 focus:outline-none focus:ring">
                                Locked
                            </a>
                        </div>
                    </div>

                    <div className="ml-3 flex items-center space-x-4">
                        {active ? (
                            <>
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex w-full items-center justify-center rounded border border-gray-300 py-2 px-3 text-sm transition hover:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-opacity-30 dark:hover:border-opacity-100">
                                            {NETWORK_LABEL[chainId]}
                                            <MdExpandMore className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white text-gray-700 shadow focus:outline-none dark:divide-gray-600 dark:bg-gray-700 dark:text-gray-200">
                                            <div className="p-1">
                                                {[
                                                    ChainId.ETHEREUM,
                                                    ChainId.MATIC,
                                                    ChainId.ARBITRUM,
                                                    ChainId.AVALANCHE,
                                                    // ChainId.MOONBEAM,
                                                    ChainId.MOONRIVER,
                                                    ChainId.FANTOM,
                                                    ChainId.BSC,
                                                    ChainId.XDAI,
                                                    ChainId.HARMONY,
                                                    ChainId.TELOS,
                                                    ChainId.CELO,
                                                    ChainId.FUSE,
                                                    ChainId.OKEX,
                                                    ChainId.HECO,
                                                    ChainId.PALM,
                                                ]
                                                    .sort((key) => (chainId === key ? -1 : 0))
                                                    .map((key: number, i: number) => {
                                                        return (
                                                            <Menu.Item key={key}>
                                                                <a href="#" onClick={() => switchToNetwork(key)} className="group flex cursor-pointer rounded p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                        aria-hidden="true"
                                                                        fill="currentColor"
                                                                        viewBox="0 0 16 16">
                                                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                                    </svg>

                                                                    <span>{NETWORK_LABEL[key]}</span>
                                                                </a>
                                                            </Menu.Item>
                                                        );
                                                    })}

                                                <Menu.Item>
                                                    <a href="#" className="group flex cursor-pointer rounded p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                        </svg>

                                                        <span>Ethereum</span>
                                                    </a>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <a href="#" className="group flex cursor-pointer rounded p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                        </svg>

                                                        <span>Binance Smart Chain</span>
                                                    </a>
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>

                                <div className="flex flex-shrink-0 space-x-6 self-center">
                                    <span className="relative z-0 inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="relative inline-flex items-center rounded-l border border-gray-300  px-3 py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-opacity-30 dark:hover:border-opacity-100">
                                            1.02 ETH
                                        </button>
                                        <button
                                            type="button"
                                            className="relative -ml-px inline-flex items-center rounded-r border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium hover:border-indigo-500 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-opacity-30 dark:bg-gray-700 dark:hover:border-opacity-100">
                                            {shorted(account)}
                                        </button>
                                    </span>
                                </div>

                                {/* <button className="relative flex-shrink-0 rounded bg-white bg-opacity-20 p-2 text-sm transition hover:bg-opacity-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-50 focus:ring-opacity-90">
                                    {parseFloat(formatEther(ethBalance)).toPrecision(4)}
                                </button>

                                <button className="relative flex-shrink-0 rounded bg-gray-300 bg-opacity-20 p-2 text-sm transition hover:bg-opacity-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-50 focus:ring-opacity-90">
                                    {shorted(account)}
                                </button> */}

                                <Menu as="div" className="relative inline-block">
                                    <Menu.Button className="relative flex-shrink-0 rounded-md border border-gray-300 p-2 transition hover:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-opacity-90 dark:border-opacity-30 dark:hover:border-opacity-100">
                                        <span className="sr-only">Open options</span>
                                        <MdMoreVert className="h-5 w-5"></MdMoreVert>
                                    </Menu.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-white text-gray-700 shadow focus:outline-none dark:divide-gray-600 dark:bg-gray-700 dark:text-gray-200">
                                            {/* <div className="py-1">

                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a href="https://geek.gl" target="_blank" rel="noreferrer" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex p-2 text-sm')}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z" />
                                                            </svg>

                                                            <span>What is GEEK?</span>
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div> */}

                                            <div className="p-1">
                                                <Menu.Item>
                                                    <a className="group flex cursor-pointer rounded p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                                                        <MdOutlineAutoStories className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"></MdOutlineAutoStories>

                                                        <span>Docs</span>
                                                    </a>
                                                </Menu.Item>
                                            </div>

                                            <div className="p-1">
                                                {isDarkMode ? (
                                                    <Menu.Item>
                                                        <a onClick={() => setDarkMode(false)} className="group flex cursor-pointer rounded p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="currentColor"
                                                                aria-hidden="true"
                                                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                viewBox="0 0 16 16">
                                                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                                            </svg>

                                                            <span>Appearance: Dark</span>
                                                        </a>
                                                    </Menu.Item>
                                                ) : (
                                                    <Menu.Item>
                                                        <a onClick={() => setDarkMode(true)} className="group flex cursor-pointer rounded p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="currentColor"
                                                                aria-hidden="true"
                                                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                viewBox="0 0 16 16">
                                                                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                                            </svg>
                                                            <span>Appearance: Light</span>
                                                        </a>
                                                    </Menu.Item>
                                                )}
                                            </div>

                                            <div className="p-1">
                                                <Menu.Item>
                                                    <a href="#" className="group flex cursor-pointer rounded p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                        </svg>

                                                        <span>Get in touch</span>
                                                    </a>
                                                </Menu.Item>

                                                <Menu.Item>
                                                    <a href="/about/terms" className="group flex cursor-pointer rounded p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                                                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                                                        </svg>

                                                        <span>Terms of use</span>
                                                    </a>
                                                </Menu.Item>

                                                <Menu.Item>
                                                    <a href="/about/privacy" className="group flex cursor-pointer rounded p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                                                            <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                                                        </svg>
                                                        <span>Privacy policy</span>
                                                    </a>
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </>
                        ) : (
                            <button
                                onClick={connect}
                                className="ml-3 flex-shrink-0 rounded-md border border-indigo-500 px-4 py-2 transition hover:bg-indigo-500 hover:text-white">
                                Connect
                            </button>
                        )}


                    </div>
                </div>
            </div>
        </div>
    );
}
