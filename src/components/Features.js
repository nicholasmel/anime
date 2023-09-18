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
        <div className="mb-10 bg-neutral-900 bg-opacity-80  sm:rounded-lg w-80">
            <div className="max-w-2xl grid items-center gap-y-4 gap-x-1">
                <div className="grid grid-cols-1 grid-rows-1">
                    <img
                        src={image}
                        alt=""
                        className="max-w-7xl justify-self-center h-48 w-full object-cover"
                        width="300"
                    />
                </div>
                <div className='mx-4'>
                    <h2 className="text-base font-extrabold tracking-tight text-white sm:text-sm">{title}</h2>
                    <p className="text-slate-100 text-xs">{japanese}</p>
                    <dl className="mt-1 grid grid-cols-4 gap-x-1 gap-y-1 sm:grid-cols-4 sm:gap-y-1 lg:gap-x-1">
                        {features.map((feature) => (
                            <div key={feature.name}>
                                <dt className="font-medium text-blue-600 mt-2">{feature.name}</dt>
                                {feature.description == null ? <dd className="mt-2 text-sm text-white">{feature.name} Not Available</dd> : <dd className="mt-2 text-sm text-white">{feature.description}</dd>}
                            </div>
                        ))}
                    </dl>
                </div>
            </div >
        </div >
    )
}
