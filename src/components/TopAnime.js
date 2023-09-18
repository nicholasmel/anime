import React, { useState, useEffect, useRef } from 'react';

function TopAnime({ byFilter, sectionTitle }) {
    const [topAnime, SetTopAnime] = useState([]);
    const carousel = useRef(null);
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const GetTopAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/top/anime?filter=${byFilter}&limit=20`)
            .then(res => res.json());

        SetTopAnime(temp.data);
    }

    useEffect(() => {
        GetTopAnime();
    }, []);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    maxScrollWidth.current = 4083;
    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);

    return (
        <div className="carousel my-12 mx-auto">
            <h2 className="text-4xl leading-8 font-semibold mb-12 text-white ml-12">
                {sectionTitle}
            </h2>
            <div className="relative overflow-hidden">
                <div className="flex justify-between absolute top left w-full h-full">
                    <button
                        onClick={movePrev}
                        className="hover:bg-black text-white w-10 h-full text-center opacity-75 hover:opacity-70 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('prev')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-20 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Prev</span>
                    </button>
                    <button
                        onClick={moveNext}
                        className="hover:bg-black text-white w-10 h-full text-center opacity-75 hover:opacity-70 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('next')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-20 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
                <div
                    ref={carousel}
                    className="carousel-container w-100 h-100 relative flex ml-12 gap-7 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                >
                    {topAnime.map((anime, index) => {
                        return (
                            <div
                                key={index}
                                className="carousel-item text-center relative w-52 h-96 snap-start"
                            >
                                <a
                                    //href={resource.link}
                                    className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                                >
                                    <img
                                        src={anime.images.webp.large_image_url || ''}
                                        alt={anime.title}
                                        className="h-80 w-full"
                                    />
                                    <h3 className="text-white py-1 px-2 text-left text-sm">
                                        {anime.title_english}
                                    </h3>
                                    <p className="text-white px-2 text-left text-sm opacity-90">
                                        {anime.year} | rank: {anime.rank}
                                    </p>
                                </a>
                                <a
                                    //href={anime.link}
                                    className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-neutral-900 z-10"
                                >
                                    <h3 className="text-white py-6 px-3 mx-auto text-l">
                                        {anime.title_english}
                                    </h3>
                                    <p className="text-white py-1 px-3 mx-auto text-sm">
                                        Rating: {anime.score}
                                    </p>
                                    <p className="text-white py-1 px-3 mx-auto text-sm opacity-70">
                                        {anime.episodes} episodes
                                    </p>
                                    <p className="text-white py-4 px-4 text-left text-sm">
                                        {anime.synopsis}
                                    </p>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default TopAnime;
