import React, {Component} from 'react';
import { Button, Form } from 'semantic-ui-react'

import API from '../backend/data'

export default class Login extends Component{

  state = {
    name: '',
    email: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(console.log)
  }


  render(){
    return(
      <Form className='Form' onSubmit={(e) => this.handleSubmit(e)}>
        {this.props.login ? <h1>Login</h1> : <h1>Signup</h1>}
       <Form.Field>
         <input placeholder='Name'
         name='name' onChange={(e) => this.handleChange(e)}
          />
       </Form.Field>
       <Form.Field>
         <input placeholder='Email'
         name='email' onChange={(e) => this.handleChange(e)}/>
       </Form.Field>
       <Button size='small' type='submit'>Submit</Button>
       {this.props.login ? <Button size='small' onClick={() => this.props.toggleSignup()}>Signup</Button>
       : <Button size='small' onClick={() => this.props.toggleLogin()}>Login</Button>}
     </Form>
    )
  }
}
