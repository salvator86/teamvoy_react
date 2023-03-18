import './App.css';
import {useEffect, useState} from "react";
import PokemonsList from "./components/pokemonsList/PokemonsList";
import PokemonInfo from "./components/pokemonInfo/PokemonInfo";
import Spinner from "./components/spinner/Spinner";
import {getFetch, transformPokemonData} from "./services/api.service";

function App() {

    const [pokemons, setPokemons] = useState([]);
    const [nextPageUrl, setNextPage] = useState('')
    const [showedInfo, setShowedInfo] = useState(false);
    const [spinner, setSpinner] = useState(false);

    const [pokemonInfo, setPokemonInfo] = useState({
        img: '',
        name: '',
        types: [],
        attack: '',
        defence: '',
        hp: '',
        spAttack: '',
        spDefence: '',
        speed: '',
        weight: '',
        totalMoves: ''
    });

    const changeSpinner = (spinnerBoolean) => {
        setSpinner(spinnerBoolean)
    }

    const loadMore = (nextPageUrl) => {

        changeSpinner(true)

        getFetch(nextPageUrl)
            .then(data => {
                setNextPage(data.next)
                setPokemons([...pokemons, ...data.results])
                changeSpinner(false)
            })

    }

    const filterPokemons = (array) => {
        setNextPage('')
        setPokemons(array.map(pokemon => pokemon.pokemon));
    }

    const showPokemonInfo = (pokemon) => {
        setShowedInfo(true);
        setPokemonInfo(transformPokemonData(pokemon))
    }

    useEffect(() => {

        changeSpinner(true)

        getFetch('https://pokeapi.co/api/v2/pokemon/?limit=12')
            .then(data => {
                data.next ? setNextPage(data.next) : setNextPage('')
                setPokemons(data.results)
                changeSpinner(false)
            })

    }, [])

    return (
        <div>
            <header className='header-title'>
                <h1>POKEDEX</h1>
            </header>
            <main className='pokemon-content'>
                <PokemonsList nextPageUrl={nextPageUrl}
                              pokemons={pokemons}
                              showPokemonInfo={showPokemonInfo}
                              loadMore={loadMore}
                              filterPokemons={filterPokemons}
                              spinner={spinner}
                              changeSpinner={changeSpinner}
                />
                {
                    showedInfo
                    ?   <PokemonInfo pokemonInfo={pokemonInfo}/>
                    :   <div className='pokemon-content__info-side'>
                            <p className='pokemon-content__info-side__text'>
                                Click on pokemon to see more information about</p>
                        </div>
                }
            </main>
            <Spinner spinner={spinner}/>
        </div>
    );
}

export default App;
