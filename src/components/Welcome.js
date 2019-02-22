import React from 'react';

import { Button, Header } from 'semantic-ui-react'


const Welcome = (props) => {


  return(
    <div>
      <Header style={{ fontFamily: 'Amatic SC, cursive', fontSize: '75px', textAlign: 'center', padding: '0.50em' }}>Hi, I am Truly Unique (: </Header>
      {props.login || props.signup ? null :
      <Button.Group size='huge' style={{margin: '0 40%',}}>
        <Button style={{ fontFamily: 'Indie Flower, cursive'}} onClick={() => props.toggleLogin()}>Login</Button>
        <Button style={{ fontFamily: 'Indie Flower, cursive'}} onClick={() => props.toggleSignup()}>Sign Up</Button>
      </Button.Group>}
    </div>
  )
}
export default Welcome
