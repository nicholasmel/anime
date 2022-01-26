import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';

function Search(props) {
    return (
        <div className='mx-28 lg:mx-96 my-5 flex h-10'>
            <SearchIcon className='text-sky-600' width="20" />
            <input className="mx-4 bg-slate-800 bg-opacity-50 focus:ring-2 focus:ring-sky-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-200 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-800 shadow-sm border-t border-slate-700" type="text" aria-label="Filter projects" placeholder={props.placeHolder}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        props.HandleSearch();
                    }
                }}
                value={props.search}
                onChange={e => props.setSearch(e.target.value)}></input>
        </div>
    );
}

export default Search;
