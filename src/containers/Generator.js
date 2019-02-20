import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import API from '../backend/data'
import Title from '../components/Title'
import Affirmation from '../components/Affirmation'

export default class Generator extends Component {

  state = {
    affirmations: []
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

  render(){
    console.log(this.state)
    return(
      <div>
        <Title />
      </div>
    )
  }
}
