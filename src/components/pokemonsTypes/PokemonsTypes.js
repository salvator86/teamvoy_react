import React from 'react';
import './PokemonsTypes.css'

const PokemonsTypes = ({pokemonTypes}) => {

    const pokemonReadyType = pokemonTypes.map((type, index) => {
        return (
            <div key={index} className={'pokemon-item__type pokemon-item__type__background-' + type.type.name}>
                <p className={'pokemon-item__type__text-position'}>{type.type.name}</p>
            </div>
        )})

    return (
        <>
            {pokemonReadyType}
        </>
    );
};

export default PokemonsTypes;
