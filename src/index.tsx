/* eslint-disable @typescript-eslint/no-explicit-any */
import './index.css';

import { createRoot } from 'react-dom/client';

// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

import { Web3ReactProvider } from '@web3-react/core';

import { Web3Provider } from '@ethersproject/providers';

function getLibrary(provider?: any) {
    const library = new Web3Provider(provider);
    library.pollingInterval = 8000;
    return library;
}

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
    <Web3ReactProvider getLibrary={getLibrary}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Web3ReactProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
