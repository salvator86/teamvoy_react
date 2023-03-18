import React, {useEffect, useState} from 'react';
import './PokemonItem.css'
import PokemonsTypes from "../pokemonsTypes/PokemonsTypes";
import {getFetch} from "../../services/api.service";

const PokemonItem = ({url, showPokemonInfo}) => {

    const [pokemon, setPokemon] = useState({
        name: '',
        sprites: {
            front_default: ''
        },
        types: [],
    });

    useEffect(() => {
        getFetch(url)
            .then(data => setPokemon(data))
    }, [])

    return (
        <div className='pokemon-item' onClick={() => showPokemonInfo(pokemon)}>
            {
                pokemon.sprites.front_default
                ?   <img className='pokemon-item__image' src={pokemon.sprites.front_default} alt='pokemon'/>
                :   <div className='pokemon-item__empty-image'>
                        <p>We still don't have image of this pokemon</p>
                    </div>
            }
            <p className='pokemon-item__name'>{pokemon.name}</p>
            {
                pokemon.types
                ?   <div className='pokemon-item__types'>
                        <PokemonsTypes pokemonTypes={pokemon.types}/>
                    </div>
                :   <p className='pokemon-item__type__empty'>There is no one of types</p>
            }
        </div>
    );
};

export default PokemonItem;
