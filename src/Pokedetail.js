import React, { Component, useContext, useEffect } from 'react';
import axios from 'axios';
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { IconButton, Chip, Grid, Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


class Pokedetail extends Component {
  state = {
    name: '',
    pokemonID: '',
    image: '',
    weight: '',
    height: '',
    base_exp: '',
    moves: [],
    types: [],
    isCatch : false,
    isOwned : false
  };

  

  

  // constructor(props){
  //   super(props);
  //   this.state={catch: {},catching: false};
  //   this.catched = this.catched.bind(this)
  // }

  // catched(){
  //   this.setState({catching: true});
  //   const pokemon = {
  //     name: this.state.name,
  //     image: this.state.image
  //   }
  // }


  

  async componentDidMount() {
    const { pokemonID } = this.props.match.params;

    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonID}/`;
    const pokeSpeci = `https://pokeapi.co/api/v2/pokemon-species/${pokemonID}/`;

    const pokemonres = await axios.get(pokeUrl);

    const name = pokemonres.data.name;
    const image = pokemonres.data.sprites.front_default;
    const height = pokemonres.data.height;
    const weight = pokemonres.data.weight;
    const base_exp = pokemonres.data.base_exp;
    const types = pokemonres.data.types.map(type => type.type.name)
    const moves = pokemonres.data.moves.map(move => move.move.name)

  
  // const { state, capture, addPokemons } = useContext(PokemonContext);
    
  // useEffect(() => {
  //   const fetch = async () => {
  //     const resp = await fetch (pokeUrl);
  //     const data = await response.json();
  //     addPokemons(data.results);
  //   }
  // })
     

    this.setState({
      name,
      weight,
      height,
      image,
      moves,
      base_exp,
      pokemonID,
      types,
      
    });
    

  
  };


  render() {
    

    return (
      <div className="pokedetail">
        <Link to={`/`} >
          <IconButton aria-label="delete" size="large">
            <ArrowBackIcon fontSize="inherit" />
          </IconButton>
        </Link>

        <div className="center" style={{ textAlign: 'center' }}>
          <h2 align="center" style={{ textTransform: 'capitalize', marginTop: '-10px' }}  >{this.state.name}</h2>

          <div className="float-center">
            {this.state.types.map(type => (
              <Chip key={type} label={type} variant="outlined" style={{ marginLeft: '5px', textTransform: 'capitalize' }} />
            ))}
          </div>

        </div>

        <div className="center" style={{ textAlign: 'center' }}>
          <Image
            src={this.state.image}
            style={{ width: '400px', marginTop: '-15px' }}
            
          />


          <Grid container spacing={3} style={{ marginTop: '-70px' }}>
            <Grid item xs={6}>
              <h3 align="center" style={{ fontFamily: 'ui-sans-serif' }}>Height</h3>
              <h3>{this.state.height}</h3>
            </Grid>
            <Grid item xs={6}>
              <h3 align="center" style={{ fontFamily: 'ui-sans-serif' }}>Weight</h3>
              <h4>{this.state.weight}</h4>
            </Grid>
          </Grid>
            
            <Link to={`/MyPokemon`} style={{textDecoration: 'none'}}>
          <Button
            variant="contained" style={{ marginBottom: '10px', backgroundColor: '#ff6333', color: 'white' }} >Catch!
          </Button>
          </Link>

          <div className="card">
            <hr></hr>
            <h3>Moves</h3>
            <div className="float-center">
              {this.state.moves.map(move => (
                <Chip key={move} label={move} variant="outlined" style={{ marginLeft: '5px', textTransform: 'capitalize', marginTop: '5px' }} />
              ))}
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default Pokedetail