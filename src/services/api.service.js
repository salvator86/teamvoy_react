export const getFetch = async (url) => {

    const response = await fetch(url);

    if (!response.ok) {
        throw Error(`Could not fetch to ${url} status: ${response.status}`)
    }

    return await response.json();
}

export const transformPokemonData = (pokemon) => {

    return {
        img: pokemon.sprites.front_default,
        name: pokemon.species.name,
        types: pokemon.types.map(type => type.type),
        attack: pokemon.stats[1].base_stat,
        defence: pokemon.stats[2].base_stat,
        hp: pokemon.stats[0].base_stat,
        spAttack: pokemon.stats[3].base_stat,
        spDefence: pokemon.stats[4].base_stat,
        speed: pokemon.stats[5].base_stat,
        weight: pokemon.weight,
        totalMoves: pokemon.moves.length
    }

}
