import React, { useState, useEffect } from 'react';
import Features from './Features';
import Search from './Search';

function Anime() {
    const [characterList, setCharacterList] = useState([]);
    const [search, setSearch] = useState(['One Piece']);

    const getCharacter = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=6`)
            .then(res => res.json());

        setCharacterList(temp.data);
    }

    useEffect(() => {
        getCharacter();
    }, []);

    const HandleSearch = e => {
        getCharacter(search);
    }

    return (
        <div>
            <Search
                HandleSearch={HandleSearch}
                search={search}
                setSearch={setSearch}
                characterList={characterList}
                placeHolder={"Search..."}
            />
            <h2 className="text-xl leading-8 font-semibold text-white ml-24 mt-8 mb-2">
                Top Results
            </h2>
            <div className='flex flex-wrap justify-center gap-x-8'>
                {characterList.map((character) => (
                    <Features key={character.title} title={character.title_english} japanese={character.title_japanese} synopsis={character.synopsis} image={character.images.webp.large_image_url} rank={character.rank} year={character.year} score={character.score} source={character.source} status={character.status} episodes={character.episodes} />
                ))}
            </div>
        </div>

    );
}

export default Anime;
