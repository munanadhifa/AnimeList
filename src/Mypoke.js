import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Card, CardContent, Grid, Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class Mypoke extends Component {
  render() {
    return (
      <div className="container">
        <Link to={`/`}>
          <IconButton aria-label="delete" size="large" >
            <ArrowBackIcon fontSize="inherit" />
          </IconButton>
        </Link>

        <div className="center" style={{ textAlign: '-webkit-center' }} >
          <h1>My Pokemon</h1>

          <Card variant="outlined" style={{ width: '300px', marginLeft: '15px', height: '70px', userSelect: 'none' }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                
              </Grid>
              <Grid item xs={3}>
                
              </Grid>
              <Grid item xs={3}>
              <Link to={`/`} style={{textDecoration: 'none'}}>
                  <Button style={{ marginLeft: '50px', color: 'green', marginTop: '3px'}} >
                    Release
                 
                  </Button>
                  </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
         
        
      </div>
        </div>
     
    )
  }
}

export default Mypoke