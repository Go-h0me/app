import { toKb } from '@morioh/helper';
import { Currency } from '@sushiswap/core-sdk';
import { memo, useState } from 'react';
import { MdExpandMore, MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { dispatch } from 'use-bus';
import { useAccount, useBalance } from 'wagmi';

export default memo(function CurrencyInput({ isBase, currency, value }: { isBase: boolean; currency: Currency | undefined; value: number }) {
    const { data: account } = useAccount();

    const { data: balance } = useBalance({
        addressOrName: account?.address,
        token: currency?.isToken ? currency.address : undefined,
    });

    const [val, setValue] = useState(value);

    const selectToken = () => {
        dispatch({ type: 'show', data: ['selectToken', { isBase }] });
    };

    const handleChange = (event: any) => setValue(event.target.value);

    const change = (p: number) => setValue(balance && balance.value.gt(0) ? (parseFloat(balance.formatted) * p) / 100 : 0);

    return (
        <div className="space-y-4 rounded-md bg-gray-100 p-4 dark:bg-gray-900">
            <div className="flex justify-between">
                <div className="inline-flex items-center text-sm"> {isBase ? 'Send' : 'Receive'}:</div>
                <div className="inline-flex items-center space-x-2 text-sm">
                    <MdOutlineAccountBalanceWallet className="h-4 w-4" />
                    <span>{balance ? toKb(parseFloat(balance.formatted), 6) : '0.00'}</span>
                </div>
            </div>

            <div className="relative mt-4 flex rounded-md shadow-sm">
                <input
                    type="text"
                    value={val > 0 ? val : ''}
                    placeholder="0.00"
                    onChange={handleChange}
                    className="block w-full rounded-none rounded-l-md border border-gray-300 p-2.5 text-sm transition focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
                />

                <button
                    type="button"
                    onClick={selectToken}
                    className="-ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-indigo-500 hover:text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600">
                    {currency ? currency.symbol : 'Select a token'} <MdExpandMore className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </button>
            </div>

            {isBase && (
                <div className="flex justify-between">
                    {[10, 25, 50, 75, 100].map((p) => (
                        <button type="button" key={p} onClick={() => change(p)} className="rounded bg-white p-1 px-4 text-sm transition hover:bg-indigo-500 hover:text-white dark:bg-opacity-20 dark:hover:bg-opacity-100">
                            {p}%
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
});
