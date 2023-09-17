import React, { useState } from 'react';
import Modal from './Modal';
import Slide from './Slide';

function PageSection({ title, quote }) {
    const [open, setOpen] = useState(false);
    const [openSlide, setOpenSlide] = useState(false);

    return (
        <div className="bg-black-900">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-20 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block text-slate-300 text-center lg:text-left">{title}</span>
                    <span className="block text-red-700 text-center lg:text-left">{quote}</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 items-center object-center justify-center">
                    <div className="inline-flex rounded-md shadow">
                        <Modal open={open} setOpen={setOpen} />
                        <a
                            className="mx-2 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-blue-600 hover:bg-blue-500 w-32"
                            onClick={() => setOpen(true)}
                        >
                            Tips
                        </a>
                        <Slide open={openSlide} setOpen={setOpenSlide} />
                        <a
                            className="mx-2 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-blue-600 bg-slate-800 hover:bg-slate-700 w-32"
                            onClick={() => setOpenSlide(true)}
                        >
                            View More
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default PageSection;
