import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import PokemonList from './Pokemonlist';
import Pokedetail from './Pokedetail';
import Mypoke from './Mypoke';

 
class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={PokemonList}/>
        <Route exact path="/pokemon/:pokemonID" component={Pokedetail} />
        <Route exact path="/Mypokemon" component={Mypoke}/>
      
      </Switch>
      </Router>

    )
  }
}

export default App