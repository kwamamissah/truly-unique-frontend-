import React, {Component} from 'react';
import { Dropdown, Button } from 'semantic-ui-react'

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
    mood: ''
  }

  handleTypeChange = (e, {kind} ) => this.setState({ kind })
  handleMoodChange = (e, {mood} ) => this.setState({ mood })

  render(){
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

        <Button size='big'>Generate</Button>
      </div>


    )
  }
}
