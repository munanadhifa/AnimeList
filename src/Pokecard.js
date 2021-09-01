import React, { Component } from 'react';
import { Grid, Card, CardContent, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import { ReactComponent as Pokeball } from './pokeball.svg'



class Pokecard extends Component {
  state = {
    name: '',
    image: '',
    pokemonID: '',
  }

  

  componentDidMount() {
    const { name, url } = this.props
    const pokemonID = url.split('/')[url.split('/').length - 2];
    const image = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonID}.png?raw=true`

    this.setState({
      name,
      image,
      pokemonID
    });
  }

  render() {
    return (
      <div className="pokecard" style={{ marginTop: '20px', textAlign:'-webkit-center'}}>
        <Card variant="outlined" style={{ width: '300px', marginLeft: '15px', height: '70px', userSelect: 'none' }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Avatar
                  src={this.state.image}
                  style={{ width: '70px', marginLeft: '-10px' }}
                />

              </Grid>
              <Grid item xs={3}>
                <h3 style={{ marginTop: '10px', fontFamily: 'ui-san-serif', textTransform: 'capitalize' }}>{this.state.name}</h3>
              </Grid>
              <Grid item xs={3}>
                <Link to={`pokemon/${this.state.pokemonID}`} style={{textDecoration: 'none'}}>
                  <Button style={{ marginLeft: '50px', color: 'red', marginTop: '3px'}} >
                    Details
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default Pokecard