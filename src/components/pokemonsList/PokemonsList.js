import React, {useEffect, useState} from 'react';
import PokemonItem from "../pokemonItem/PokemonItem";
import './PokemonsList.css'
import Spinner from "../spinner/Spinner";
import {getFetch} from "../../services/api.service";

const PokemonsList = ({pokemons, showPokemonInfo, nextPageUrl, loadMore, filterPokemons, changeSpinner,
                          setDefaultPokemons}) => {

    const [types, setTypes] = useState([]);

    const pokemonsList = pokemons.map((pokemon) => {
        return (
            <PokemonItem
                key={pokemon.name}
                {...pokemon}
                showPokemonInfo={showPokemonInfo}
            />
        )
    })

    const options = types.map(type => {
        return <option className='pokemon-items__filter_option' value={type}>{type}</option>
    })

    useEffect(() => {
        getFetch('https://pokeapi.co/api/v2/type/')
            .then(data => {
                setTypes(data.results.map(type => type.name));
            })
    }, [])

    const getPokemonsByType = (value) => {
        if (value !== 'Filter') {
            changeSpinner(true)
            getFetch(`https://pokeapi.co/api/v2/type/${value}`)
                .then(data => {
                    filterPokemons(data.pokemon)
                    changeSpinner(false)
                })
        } else {
            changeSpinner(true)
            getFetch(`https://pokeapi.co/api/v2/pokemon/?limit=12`)
                .then(data => {
                    setDefaultPokemons(data)
                    changeSpinner(false)
                })
        }
    }

    return (
        <div className='pokemon-items__block'>
            <Spinner/>
            <select className='pokemon-items__filter'
                    name="filter by"
                    defaultValue='Filter'
                    onChange={(e) => getPokemonsByType(e.target.value)}>
                <option
                    value='Filter'>Filter</option>
                    {options}
            </select>
            <div className='pokemon-items'>
                {pokemonsList}
            </div>
            {
                nextPageUrl && pokemons.length
                ? <button
                        onClick={() => loadMore(nextPageUrl)}
                        className='pokemon-items__load'>Load more</button>
                : <></>
            }
        </div>
    );
};

export default PokemonsList;
