import React, { Component } from 'react';
// import { Grid } from 'semantic-ui-react'

import API from '../backend/data'
import Title from '../components/Title'
import Login from '../components/Login'
import Welcome from '../components/Welcome'
import Affirmation from '../components/Affirmation'

export default class Generator extends Component {

  state = {
    getStarted: false,
    login: false,
    signup: true,
    affirmations: [],
    viewed: []
  }

  fetchAffirmations = () => {
      fetch(`${API}/affirmations`)
      .then(resp => resp.json())
      .then(words => this.setState({ affirmations: words }))
    }

    componentDidMount(){
      this.fetchAffirmations()
    }

    toggleStart = () => {
      this.setState({ getStarted: true})
  }

// {this.state.affirmations.map(data => <li key={data.id}>{data.content}</li>)}

//check backend code to see logic

// need a login for
//form on Title page that when getStarted is clicked asked for name and email.
//once logged in ask if they want last poem/quote
//give them option based on mood/kind
//give random quote/poem
//finish styling so that it looks like it is on a letter.
//bonus - if quote put on notecard, if poem put on letter

//if login is true then show login component and not welcome. if signup is ture then show
// signup page and not login. if getStarted is false hide Welcome


  render(){

    return(
      <div>
        <Title getStarted={this.state.getStarted} clickHandler={this.toggleStart} />
        {this.state.getStarted ? <Welcome /> : null }
        {this.state.login ? <Login /> : null }
        <Affirmation words={this.state.affirmations} />
      </div>
    )
  }
}
