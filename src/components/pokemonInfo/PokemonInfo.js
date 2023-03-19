import React from 'react';
import './PokemonInfo.css'
import TableRow from "../tableRow/TableRow";
import image from '../../assets/pokemon.webp'

const PokemonInfo = ({pokemonInfo}) => {

    const type = pokemonInfo.types.map((type, i) => {
        return (
            <p key={i}>{type.name}</p>
        )
    })

    return (
        <div className='pokemon-info__block'>
            <div className='pokemon-info__item'>
                {
                    pokemonInfo.img
                    ?   <img className='pokemon-info__image' src={pokemonInfo.img} alt="pokemon"/>
                    :   <img className='pokemon-info__image' src={image} alt=""/>
                }
                <table className='pokemon-info__table'>
                    <tbody>
                        <TableRow name='Type' value={type}/>
                        <TableRow name='Attack' value={pokemonInfo.attack}/>
                        <TableRow name='Defence' value={pokemonInfo.defence}/>
                        <TableRow name='HP' value={pokemonInfo.hp}/>
                        <TableRow name='SP Attack' value={pokemonInfo.spAttack}/>
                        <TableRow name='SP Defence' value={pokemonInfo.spDefence}/>
                        <TableRow name='Speed' value={pokemonInfo.speed}/>
                        <TableRow name='Weight' value={pokemonInfo.weight}/>
                        <TableRow name='Total moves' value={pokemonInfo.totalMoves}/>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PokemonInfo;
