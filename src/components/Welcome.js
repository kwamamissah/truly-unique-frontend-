import React from 'react';

import { Button, Header, Segment } from 'semantic-ui-react'


const Welcome = (props) => {


  return(
    <div>
      <Header style={{ fontFamily: 'Amatic SC, cursive', fontSize: '75px', textAlign: 'center', padding: '1em' }}>Hi, I am Truly Unique (: </Header>
      <Button.Group size='huge' style={{margin: '0 40%',}}>
        <Button style={{ fontFamily: 'Indie Flower, cursive'}}>Login</Button>
        <Button style={{ fontFamily: 'Indie Flower, cursive'}}>Sign Up</Button>
      </Button.Group>
    </div>
  )
}
export default Welcome
