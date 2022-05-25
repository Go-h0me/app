import { Routes, Route, Link, Redirect, Outlet } from 'react-router-dom'

import { Fragment, useState } from 'react'

import { useAuth } from './helper/auth'

export default function App() {
    return (
        <>
            <div className="flex flex-col md:pl-64">
                <main className="flex-1">
                    <div className="py-6">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                            <h1 className="text-2xl font-semibold text-gray-900">
                                Dashboard
                            </h1>
                        </div>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                            {/* Replace with your content */}
                            <div className="py-4">
                                <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
                            </div>
                            {/* /End replace */}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )

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
    )
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
    )
}
