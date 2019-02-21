import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import API from '../backend/data'
import Title from '../components/Title'
import Welcome from '../components/Welcome'
import Affirmation from '../components/Affirmation'

export default class Generator extends Component {

  state = {
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

// {this.state.affirmations.map(data => <li key={data.id}>{data.content}</li>)}

//check backend code to see logic

// need a login for
//form on Title page that when getStarted is clicked asked for name and email.
//once logged in ask if they want last poem/quote
//give them option based on mood/kind
//give random quote/poem
//finish styling so that it looks like it is on a letter.
//bonus - if quote put on notecard, if poem put on letter

  render(){

    return(
      <div>
        <Title />
        <Welcome />
        <Affirmation words={this.state.affirmations} />
      </div>
    )
  }
}
