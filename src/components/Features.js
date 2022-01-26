import React from 'react';

export default function Features({ title, japanese, synopsis, image, rank, year, score, source, status, episodes }) {
    const features = [
        { name: 'Score', description: score },
        { name: 'Rank', description: rank },
        { name: 'Year', description: year },
        { name: 'Source', description: source },
        { name: 'Status', description: status },
        { name: 'Episodes', description: episodes },
    ]

    return (
        <div className="m-12 bg-slate-800 bg-opacity-80  sm:rounded-lg shadow-xl border-t border-slate-600">
            <div className="max-w-2xl m-10 grid items-center grid-cols-1 gap-y-16 gap-x-14 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-28 lg:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-sky-500 sm:text-4xl">{title}</h2>
                    <p className="mt-4 text-slate-100">{japanese}</p>
                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-sky-400 pt-4">
                                <dt className="font-medium text-slate-400">{feature.name}</dt>
                                {feature.description == null ? <dd className="mt-2 text-sm text-slate-200">{feature.name} Not Available</dd> : <dd className="mt-2 text-sm text-slate-200">{feature.description}</dd>}
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-1 grid-rows-1">
                    <img
                        src={image}
                        alt=""
                        className="rounded-sm max-w-7xl shadow-2xl justify-self-center"
                        width="300"
                    />
                </div>
            </div>
            <div className='p-10 lg:pb-10 lg:py-10 lg:px-28 text-sm text-gray-500'>
                <dt className="text-2xl text-sky-500">Synopsis</dt>
                <p className="mt-4 text-slate-200">{synopsis}</p>
            </div>
        </div>
    )
}
