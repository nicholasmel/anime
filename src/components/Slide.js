import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import rengoku from "../images/Rengoku.png";

function Slide({ open, setOpen, title }) {
    return (
        <div>
            <Transition show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
                    <div className="absolute inset-0 overflow-hidden">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="absolute inset-0 bg-slate-900 bg-opacity-50 transition-opacity" />
                        </Transition.Child>
                        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <div className="relative w-screen max-w-md">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                className="rounded-md text-slate-300 hover:text-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-600"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="sr-only">Close panel</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="h-full flex flex-col py-6 bg-slate-800 shadow-2xl overflow-y-scroll border-l border-slate-700">
                                        <div className="px-4 sm:px-6">
                                            <Dialog.Title className="text-lg font-medium text-sky-400">{title}</Dialog.Title>
                                        </div>
                                        <div className="mt-6 relative flex-1 px-4 sm:px-6">
                                            {/* Replace with your content */}
                                            <div className="absolute inset-0 px-4 sm:px-6">
                                                <div className="text-slate-200 border-2 border-dashed border-sky-500" aria-hidden="true">
                                                    <h1 className='p-2 text-center font-bold text-slate-200'>Anime</h1>
                                                    <div className='m-4 grid grid-cols-2 grid-rows-2 h-32'>
                                                        <img src="https://cdn.myanimelist.net/images/anime/1171/109222l.webp" alt=""
                                                            className='h-32 rounded-md shadow-xl justify-self-center' />
                                                        <div className='grid grid-rows-2'>
                                                            <h1>Jujutsu Kaisen</h1>
                                                            <p className='italic text-slate-300 text-sm'>The path of a Jujutsu sorcerer. </p>
                                                        </div>
                                                    </div>
                                                    <div className='m-4 grid grid-cols-2 grid-rows-2 h-32'>
                                                        <img src="https://cdn.myanimelist.net/images/anime/1908/120036l.webp" alt=""
                                                            className='h-32 rounded-md shadow-xl
                                                            justify-self-center' />
                                                        <div className='grid grid-rows-2'>
                                                            <h1>Demon Slayer</h1>
                                                            <p className='italic text-slate-300 text-sm'>Tanjirou will do whatever it takes to slay the demons and protect</p>
                                                        </div>
                                                    </div>
                                                    <div className='m-4 grid grid-cols-2 grid-rows-2 h-32'>
                                                        <img src="https://cdn.myanimelist.net/images/anime/5/17407.webp" alt=""
                                                            className='h-32 rounded-md shadow-xl justify-self-center' />
                                                        <div className='grid grid-rows-2'>
                                                            <h1>Naruto: Shippuuden</h1>
                                                            <p className='italic text-slate-300 text-sm'>Follow Naruto's journey to become the Hokage</p>
                                                        </div>
                                                    </div>
                                                    <div className='m-4 grid grid-cols-2 grid-rows-2 h-32'>
                                                        <img src="https://cdn.myanimelist.net/images/anime/3/40451.webp" alt=""
                                                            className='h-32 rounded-md shadow-xl
                                                            justify-self-center' />
                                                        <div className='grid grid-rows-2'>
                                                            <h1>Bleach</h1>
                                                            <p className='italic text-slate-300 text-sm'>Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper</p>
                                                        </div>
                                                    </div>
                                                    <div className='m-4 grid grid-cols-2 grid-rows-2 h-32'>
                                                        <img src="https://cdn.myanimelist.net/images/anime/12/76049l.webp" alt=""
                                                            className='h-32 rounded-md shadow-xl justify-self-center' />
                                                        <div className='grid grid-rows-2'>
                                                            <h1>One Punch Man</h1>
                                                            <p className='italic text-slate-300 text-sm'>Saitama has a rather unique hobby: being a hero.</p>
                                                        </div>
                                                    </div>
                                                    <div className='m-4 grid grid-cols-2 grid-rows-2 h-32'>
                                                        <img src="https://cdn.myanimelist.net/images/anime/6/73245.webp" alt=""
                                                            className='h-32 rounded-md shadow-xl
                                                            justify-self-center' />
                                                        <div className='grid grid-rows-2'>
                                                            <h1>One Piece</h1>
                                                            <p className='italic text-slate-300 text-sm'>Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}
export default Slide;