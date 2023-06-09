import React, {useEffect, useState} from 'react';
import './PokemonItem.css'
import PokemonsTypes from "../pokemonsTypes/PokemonsTypes";
import {getFetch} from "../../services/api.service";
import image from '../../assets/pokemon.webp'

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
                :   <img className='pokemon-item__image'
                         src={image} alt={'pokemon'}/>
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
