import { classNames } from '@morioh/helper';
import { useState } from 'react';
import { MdHistoryToggleOff, MdShare, MdSwapVert, MdTune } from 'react-icons/md';
import useBus from 'use-bus';
import useCurrenciesFromURL from '../../hooks/useCurrenciesFromURL';
import CurrencyInput from './input';

export default function Swap() {
    const { currencies, switchCurrencies, setURLCurrency } = useCurrenciesFromURL();

    useBus('token', ({ data, isBase }) => setURLCurrency(data, isBase), []);

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const shiff = () => {
        switchCurrencies();
        setA(0);
    };

    const loading = false;

    return (
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="rounded-md bg-white py-6 px-4 shadow dark:bg-gray-800">
                    <form className="space-y-4" autoComplete="off">
                        <div className="flex justify-between">
                            <div></div>
                            <div className="space-x-2">
                                <button type="button" className="inline-flex items-center rounded p-2 transition hover:bg-gray-200 dark:hover:bg-opacity-20">
                                    <MdHistoryToggleOff className="h-6 w-6" />
                                </button>
                                <button type="button" className="inline-flex items-center rounded p-2 transition hover:bg-gray-200 dark:hover:bg-opacity-20">
                                    <MdTune className="h-6 w-6" />
                                </button>
                                <button type="button" className="inline-flex items-center rounded p-2 transition hover:bg-gray-200 dark:hover:bg-opacity-20">
                                    <MdShare className="h-6 w-6" />
                                </button>
                            </div>
                        </div>

                        <CurrencyInput isBase={true} currency={currencies[0]} value={a}></CurrencyInput>

                        <div className="flex justify-center">
                            <button type="button" onClick={shiff} className="rounded p-2 transition hover:bg-gray-200 dark:hover:bg-opacity-20">
                                <MdSwapVert className="h-5 w-5"></MdSwapVert>
                            </button>
                        </div>

                        <CurrencyInput isBase={false} currency={currencies[1]} value={b}></CurrencyInput>

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
