import React, {Component} from 'react';
import { Dropdown, Button } from 'semantic-ui-react'

import Display from '../components/Display'

const type = [
  { key: 1, text: 'Poem', value: 'Poem' },
  { key: 2, text: 'Quote', value: 'Quote' }
]

const mood = [
  { key: 1, text: 'Encouragement', value: 'Encouragement'  },
  { key: 2, text: 'Love', value: 'Love' },
  { key: 3, text: 'Funny', value: 'Funny' }
]

export default class Affirmation extends Component{

  state = {
    kind: '',
    mood: '',
    isClicked: false
  }

  handleTypeChange = (e, { value } ) => this.setState({ kind: value })
  handleMoodChange = (e, { value } ) => this.setState({ mood: value })
  handleClick = (e) => this.setState({ isClicked: true })

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  findWords = () => {
    let words = this.props.words
    let type = this.state.kind.toLowerCase()
    let feeling = this.state.mood.toLowerCase()

    let search = words.filter(x => x.kind === type && x.mood === feeling)
    let num = this.getRandomInt(search.length)
    let affirmation = search[num]
    return affirmation
  }

  render(){

    let words = this.findWords()

    return (
      <div>
          <Dropdown
            onChange={this.handleTypeChange}
            options={type}
            placeholder='Choose a type'
            selection
            value={this.state.kind}
          />

          <Dropdown
            onChange={this.handleMoodChange}
            options={mood}
            placeholder='Choose a mood'
            selection
            value={this.state.mood}
          />
        <br/>

        <Button size='big' onClick={() => this.handleClick()}>Generate</Button>
        {this.state.isClicked ? <Display affirmation={words} /> : null}
      </div>


    )
  }
}
