import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { useAuth } from '../helper/auth'
import Avatar from './avatar'

export default function Sidebar() {
    const { user } = useAuth()

    return (
        <>
            <div className="fixed inset-y-0 hidden w-60 flex-col lg:flex xl:w-64">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="mt-15 flex min-h-0 flex-1 flex-col bg-white text-gray-700 shadow dark:bg-gray-700 dark:text-gray-300">
                    <div className="flex flex-1 flex-col space-y-4 overflow-hidden hover:overflow-y-auto focus:outline-none">
                        <nav className="mt-4 flex-1 space-y-4 divide-y divide-gray-100 px-2 dark:divide-gray-600">
                            <div className="text-center">
                                <Avatar
                                    src={user?.avt}
                                    size="mx-auto h-20 w-20 ring-4 ring-white bg-gray-100"
                                />
                                <h2 className="mt-4 text-center text-xl font-bold">
                                    {user?.nm}
                                </h2>
                            </div>
                            <div className="space-y-1 pt-4">
                                {/* <Link
                                    to="/"
                                    className="group flex items-center rounded-md px-2 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="mr-4 h-6 w-6 flex-shrink-0"
                                        viewBox="0 0 16 16">
                                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                                    </svg>
                                    Home
                                </Link> */}

                                <Link
                                    to="/dashboard"
                                    className="group flex items-center rounded-md px-2 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="mr-4 h-5 w-5 flex-shrink-0"
                                        viewBox="0 0 16 16">
                                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                                    </svg>
                                    Dashboard
                                </Link>

                                <Link
                                    to="/analytics"
                                    className="group flex items-center rounded-md px-2 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="mr-4 h-5 w-5 flex-shrink-0"
                                        viewBox="0 0 16 16">
                                        <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                                    </svg>
                                    Analytics
                                </Link>

                                <Link
                                    to="/contents"
                                    className="group flex items-center rounded-md px-2 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="mr-4 h-5 w-5 flex-shrink-0"
                                        viewBox="0 0 16 16">
                                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                    Contents
                                </Link>

                                <Link
                                    to="/stores"
                                    className="group flex items-center rounded-md px-2 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="mr-4 h-5 w-5 flex-shrink-0"
                                        viewBox="0 0 16 16">
                                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                                    </svg>
                                    Stores
                                </Link>

                                <Link
                                    to="/lists"
                                    className="group flex items-center rounded-md px-2 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="mr-4 h-6 w-6 flex-shrink-0"
                                        viewBox="0 0 16 16">
                                        <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                                    </svg>
                                    Lists
                                </Link>

                                <Link
                                    to="/comments"
                                    className="group flex items-center rounded-md px-2 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="mr-4 h-5 w-5 flex-shrink-0"
                                        viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>
                                    Comments
                                </Link>
                                
                            </div>

                            <div className="space-y-1 pt-4">
                                <Link
                                    to="/profile"
                                    className="group flex items-center rounded-md px-2 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="mr-4 h-5 w-5 flex-shrink-0"
                                        viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                                        />
                                    </svg>
                                    Profile
                                </Link>

                                <Link
                                    to="/security"
                                    className="group flex items-center rounded-md px-2 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="mr-4 h-5 w-5 flex-shrink-0"
                                        viewBox="0 0 16 16">
                                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                    Security
                                </Link>
                            </div>

                            {/* <div className="space-y-1"><div className="flex text-gray-500 px-2"><h3 className="flex-1 text-xs font-semibold text-gray-500 uppercase tracking-wider"> Topics </h3><a href="/topics" className><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 16 16"><path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" /></svg></a></div><div className="space-y-1" role="group" aria-labelledby="topics"><a href="/topic/firebase" className="group flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"><span className="truncate">#firebase</span></a><a href="/topic/aspdotnet" className="group flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"><span className="truncate">#aspdotnet</span></a><a href="/topic/rust" className="group flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"><span className="truncate">#rust</span></a><a href="/topic/raspberry-pi" className="group flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"><span className="truncate">#raspberry-pi</span></a><a href="/topic/webassembly" className="group flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"><span className="truncate">#webassembly</span></a><a href="/topic/flutter" className="group flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"><span className="truncate">#flutter</span></a><a href="/topic/machine-learning" className="group flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"><span className="truncate">#machine-learning</span></a><a href="/topic/tensorflow" className="group flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"><span className="truncate">#tensorflow</span></a><a href="/topic/angular-js" className="group flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"><span className="truncate">#angular-js</span></a><a href="/topic/angular" className="group flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"><span className="truncate">#angular</span></a><a href="/topic/react" className="group flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"><span className="truncate">#react</span></a><a href="/topic/javascript" className="group flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"><span className="truncate">#javascript</span></a><a href="/topic/html5" className="group flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"><span className="truncate">#html5</span></a><a href="/topic/go" className="group flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"><span className="truncate">#go</span></a><a href="/topic/hadoop" className="group flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"><span className="truncate">#hadoop</span></a><div className="text-center">
                                <a className="inline-flex items-center rounded py-0.5 px-3 hover:bg-gray-50" title="Show more"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 16 16"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" /></svg></a></div></div></div> */}

                            {/* <div className="space-y-1">
                                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline">
                                    Projects
                                </h3>
                                <div className="space-y-1" role="group" aria-labelledby="projects-headline">
                                    <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                        <span className="truncate">
                                            Website redesign
                                        </span>
                                    </a>
                                    <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                        <span className="truncate">
                                            GraphQL API
                                        </span>
                                    </a>
                                    <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                        <span className="truncate">
                                            Customer migration guides
                                        </span>
                                    </a>
                                    <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                        <span className="truncate">
                                            Profit sharing program
                                        </span>
                                    </a>
                                </div>
                            </div> */}
                        </nav>
                    </div>

                    <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                        <a
                            href="#"
                            className="group block w-full flex-shrink-0">
                            <div className="flex items-center">
                                <div>
                                    <img
                                        className="inline-block h-9 w-9 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                        Tom Cook
                                    </p>
                                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                                        View profile
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
