import React from 'react';

function Header({ title }) {
    return (
        <header className="shadow-xl bg-slate-800 bg-opacity-60 border-t border-slate-700">
            <div className="max-w-10xl mx-auto py-6 px-4 sm:px-6 lg:px-12">
                <h1 className="text-3xl font-bold text-sky-400 text-center lg:text-left">{title}</h1>
            </div>
        </header>
    );
}

export default Header;
