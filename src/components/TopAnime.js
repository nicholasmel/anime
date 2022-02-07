import React, { useState, useEffect } from 'react';

function TopAnime() {
    const [topAnime, SetTopAnime] = useState([]);

    const GetTopAnime = async () => {
        const temp = await fetch('https://api.jikan.moe/v4/top/anime')
            .then(res => res.json());

        SetTopAnime(temp.data.slice(0, 8));
    }

    useEffect(() => {
        GetTopAnime();
    }, []);

    return (
        <div className="flex flex-col overflow-hidden m-10 shadow-2xl">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-slate-900 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-slate-800 rounded-lg">
                            <thead className="bg-slate-800 border-t border-slate-600 bg-opacity-60">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-md font-medium text-slate-50 uppercase tracking-wider"
                                    >

                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-md font-medium text-sky-500   uppercase tracking-wider"
                                    >
                                        Title
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-md font-medium text-sky-500   uppercase tracking-wider"
                                    >
                                        Rating
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-md font-medium text-sky-500   uppercase tracking-wider"
                                    >
                                        Episodes
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-slate-800 bg-opacity-90 divide-y divide-slate-700">
                                {topAnime.map((anime) => (
                                    <tr key={anime.title} >
                                        <td className="pl-10 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-6 flex-shrink-0 h-30 w-20">
                                                    <img
                                                        className="h-auto w-auto shadow-2xl rounded-md object-contain"
                                                        src={anime.images.webp.large_image_url}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ml-0">
                                                    <div className="text-sm font-medium text-slate-50">{anime.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-md text-slate-50">{anime.title_english === null ? anime.title : anime.title_english}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-slate-50">{anime.rating}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-50 text-center">{anime.episodes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default TopAnime;
