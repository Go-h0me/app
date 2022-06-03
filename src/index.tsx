/* eslint-disable @typescript-eslint/no-explicit-any */
import './index.css';

import { createRoot } from 'react-dom/client';

import { WagmiConfig } from 'wagmi';

import client from './helper/connect';

// import reportWebVitals from './reportWebVitals';

import App from './app';

import Modals from './components/modals';

// const container = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);

root.render(
    <WagmiConfig client={client}>
        <App />
        <Modals></Modals>
    </WagmiConfig>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
