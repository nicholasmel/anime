import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import rengoku from "../images/Rengoku.png";

function Modal({ open, setOpen }) {
    const cancelButtonRef = useRef(null);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-neutral-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full mx-10">
                            <div className="bg-neutral-900 bg-opacity-70 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-40 lg:mx-auto">
                                        <img className="shadow-2xl rounded-sm" src={rengoku} alt="" width="400" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-slate-200">
                                            Kyojuro <a className='text-xl leading-6 font-medium text-red-600'>Rengoku</a>
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="lg:text-sm text-slate-300 italic text-xs">
                                                "Go ahead and live with your head held high. No matter how devastated you may be by your own weakness or uselessness, set your <a className='text-red-500'>heart ablaze</a>."
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-netural-800 bg-opacity-90 px-6 py-3 sm:px-6 sm:flex sm:flex-row-reverse flex flex-row-reverse">
                                <button
                                    type="button"
                                    className="mt-3 w-12 inline-flex justify-center rounded-sm border border-blue-900 shadow-sm px-4 py-2 bg-blue-800 text-base font-medium text-slate-200 hover:bg-blue-500 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setOpen(false)}
                                    ref={cancelButtonRef}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Modal;