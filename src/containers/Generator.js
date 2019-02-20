import React, { Component } from 'react';

import API from '../backend/data'

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



  render(){
    console.log(this.state)
    return(
      <div>
      {this.state.affirmations.map(data => <li key={data.id}>{data.content}</li>)}
      </div>
    )
  }
}
