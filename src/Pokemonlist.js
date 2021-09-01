import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { ReactComponent as Pokeball } from './pokeball.svg';
import Pokecard from './Pokecard';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Pokemonlist extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon?limit=5",
    pokemon: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] })
  }

  render() {
    return (
      <div>
        {this.state.pokemon ? (
          <div className="container">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <h1 align="left" style={{ marginLeft: '20px', fontFamily: 'ui-sans-serif' }}>Pokemon List Page</h1>
              </Grid>
              <Grid item xs={6}>
              <Link to={`/Mypokemon`} >
                <Pokeball style={{ width: '60px', marginTop: '30px', marginLeft: '70px' }} />
              </Link>
              </Grid>
            </Grid>
            <p style={{ textAlign: 'center', fontFamily: 'ui-sans-serif', fontSize: '20px' }}>Owned: </p>

            {this.state.pokemon.map(pokemon => (
              <Pokecard 
                key = {pokemon.id}
                name = {pokemon.name}
                url = {pokemon.url}
              />
            ))}
            
          </div>) : (<h1>Loading...</h1>)}
      </div>

    );
  }
}

export default Pokemonlist

