import { Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';

import { Fragment, useState } from 'react';

import { useAuth } from './helper/auth';
import Layout from './layout';
import Dashboard from './components/dashboard';
import Authenticated from './components/authenticated';
import Profile from './components/profile';
import _404 from './components/_404';
// import useBus from '@morioh/r-bus'

export default function App() {
    // useBus(
    //     'show',
    //     (data) => {
    //         console.log(data)
    //     },
    //     []
    // )

    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<_404 />} />
                </Route>
            </Routes>
        </>
    );

    // return (
    //   <div>
    //     <header>
    //       <h1>Welcome to React Router!</h1>
    //     </header>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="about" element={<About />} />
    //     </Routes>
    //   </div>

    // )
}

// export const PrivateRoute = ({ redirect = '/login', ...props }) => {
//     const { user } = useAuth()

//     return user ? <Route {...props} /> : <Navigate to={redirect} />
// }

function Home() {
    return (
        <>
            <main>
                <h2>Welcome to the react-router!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}

function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>That feels like an existential question, don't you think?</p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}
