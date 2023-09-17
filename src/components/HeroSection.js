import React, { useState } from 'react';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import Slide from './Slide';
import theOnePiece from '../images/onepiece.png';
import icon from '../images/icons8-naruto-sign-90.png';

function HeroSection() {
    const [open, setOpen] = useState(true);

    return (
        <div className="relative bg-black">
            <div className="max-w-10xl mx-auto">
                <div className="relative z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl xlg:max-w-4xl lg:pb-28 xl:pb-32">
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-blue-900 transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>

                    <Popover>
                        <div className="relative pt-6 px-4 sm:px-6 lg:px-10">
                            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                    <div className="flex items-center justify-between w-full md:w-auto">
                                        <div>
                                            <span className="sr-only"></span>
                                            <img
                                                className="h-12 w-auto mt-8 pl-4"
                                                src={icon}
                                                alt=""
                                            />
                                            <a href="https://icons8.com/icon/yMlC54dRHefl/naruto-sign">Naruto Sign</a> icon by <a href="https://icons8.com">Icons8</a>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="duration-150 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            >
                                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="px-5 pt-4 flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close main menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-16 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                                <span className="block xl:inline"></span>{' '}
                                <span className="block text-white xl:inline">Anime Database</span>
                            </h1>
                            <p className="mt-3 text-base text-slate-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Most active online <a className='text-blue-500'>anime + manga</a> community and database
                            </p>
                            <div className="mt-5 w-40 sm:mt-8 sm:flex sm:justify-center lg:justify-start lg:w-auto">
                                <div className="rounded-md shadow">
                                    <a
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-50 hover:text-white bg-blue-800 hover:bg-sky-500 md:py-4 md:text-lg md:px-10"
                                        onClick={() => setOpen(true)}
                                    >
                                        View More
                                    </a>
                                    <Slide open={open} setOpen={setOpen} title={"My Favorites!"} />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full object-left"
                    src={theOnePiece}
                    alt=""
                />
            </div>
        </div>
    );
}

export default HeroSection;
