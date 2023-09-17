import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';

function Search(props) {
    return (
        <div>
            <h2 className="text-4xl leading-8 font-semibold mb-12 text-white ml-12">
                Discover Your Favorite Anime
            </h2>
            <div className='mx-96'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-90 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                props.HandleSearch();
                            }
                        }}
                        onChange={e => props.setSearch(e.target.value)} />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-sm text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => { props.HandleSearch() }}>Search</button>
                </div>
            </div>
        </div>
    );
}

export default Search;
