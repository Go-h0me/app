import { classNames } from '@morioh/helper';
import { useForm } from 'react-hook-form';

import { MdAccountBalanceWallet, MdOutlineAccountBalanceWallet, MdExpandMore, MdSwapVert, MdHistoryToggleOff, MdSettings, MdFlipCameraAndroid, MdShare, MdRotateRight, MdTune } from 'react-icons/md';

export default function Swap() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const loading = false;

    const percents = [10, 25, 50, 75, 100];

    return (
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="rounded-md bg-white py-6 px-4 shadow dark:bg-gray-800">
                    <form className="space-y-4" autoComplete="off">
                        <div className="flex justify-between">
                            <div></div>
                            <div className="space-x-2">
                                <button type="button" className="inline-flex items-center rounded p-2 transition hover:bg-gray-200 dark:hover:bg-opacity-20">
                                    <MdHistoryToggleOff className="h-6 w-6"></MdHistoryToggleOff>
                                </button>
                                <button type="button" className="inline-flex items-center rounded p-2 transition hover:bg-gray-200 dark:hover:bg-opacity-20">
                                    <MdTune className="h-6 w-6"></MdTune>
                                </button>
                                <button type="button" className="inline-flex items-center rounded p-2 transition hover:bg-gray-200 dark:hover:bg-opacity-20">
                                    <MdShare className="h-6 w-6"></MdShare>
                                </button>
                            </div>
                        </div>
                        <div className="space-y-4 rounded-md bg-gray-100 p-4 dark:bg-gray-900">
                            <div className="flex justify-between">
                                <div className="inline-flex items-center text-sm">Send:</div>
                                <div className="inline-flex items-center space-x-2 text-sm">
                                    <MdOutlineAccountBalanceWallet className="h-4 w-4" />
                                    <span>100</span>
                                </div>
                            </div>

                            <div className="mt-4 flex rounded-md shadow-sm">
                                <input
                                    type="text"
                                    className="block w-full rounded-none rounded-l-md border border-gray-300 p-2.5 text-sm transition  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
                                />

                                <button
                                    type="button"
                                    className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-indigo-500 hover:text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600">
                                    ETH <MdExpandMore className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>

                            <div className="flex justify-between">
                                {percents.map((p) => (
                                    <button type="button" key={p} className="rounded bg-white p-1 px-4 text-sm transition hover:bg-indigo-500 hover:text-white dark:bg-opacity-20 dark:hover:bg-opacity-100">
                                        {p}%
                                    </button>
                                ))}

                                {/* <button className="rounded bg-white p-1 px-4 text-sm transition hover:bg-gray-200 dark:hover:bg-opacity-20">10%</button>
                                <button className="rounded bg-white p-1 px-4 text-sm transition hover:bg-gray-200 dark:hover:bg-opacity-20">25%</button>
                                <button className="rounded bg-white p-1 px-4 text-sm transition hover:bg-gray-200 dark:hover:bg-opacity-20">50%</button>
                                <button className="rounded bg-white p-1 px-4 text-sm transition hover:bg-gray-200 dark:hover:bg-opacity-20">75%</button>
                                <button className="rounded bg-white p-1 px-4 text-sm transition hover:bg-gray-200 dark:hover:bg-opacity-20">100%</button> */}
                            </div>

                            {/* <input
                                type="email"
                                className={classNames(
                                    errors.mail ? 'border-red-500' : '',
                                    'block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 transition focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500'
                                )}
                                {...register('mail', {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            /> */}
                        </div>

                        <div className="flex justify-center">
                            <button type="button" className="rounded p-2 transition hover:bg-gray-200 dark:hover:bg-opacity-20">
                                <MdSwapVert className="h-5 w-5"></MdSwapVert>
                            </button>
                        </div>

                        <div className="rounded-md bg-gray-100 p-4 dark:bg-gray-900">
                            <div className="flex justify-between">
                                <div className="inline-flex items-center text-sm">Receive:</div>
                                <div className="inline-flex items-center space-x-2 text-sm">
                                    <MdOutlineAccountBalanceWallet className="h-4 w-4" />
                                    <span>100</span>
                                </div>
                            </div>

                            <div className="mt-4 flex rounded-md shadow-sm">
                                <input
                                    type="text"
                                    className="block w-full rounded-none rounded-l-md border-gray-300 p-2.5 text-sm transition focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
                                />

                                <button
                                    type="button"
                                    className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-indigo-500 hover:text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600">
                                    USDT <MdExpandMore className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>

                        <div>
                            <button type="submit" disabled={loading} className={classNames(loading ? 'animate-pulse' : '', 'btn w-full')}>
                                Connect to wallet
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
