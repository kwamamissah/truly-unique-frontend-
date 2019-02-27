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

  handleLoginSubmit = (e) => {
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

  handleSignUpSubmit = (e) => {
    e.preventDefault()
    fetch(`${API}/users`, {
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
      <div>
      {this.props.login ?
      <Form onSubmit={(e) => this.handleLoginSubmit(e)}>
        <h1>Login</h1>
       <Form.Field>
         <input placeholder='Name'
         name='name' onChange={(e) => this.handleChange(e)}
          />
       </Form.Field>
       <Form.Field>
         <input placeholder='Email'
         name='email' onChange={(e) => this.handleChange(e)} />
       </Form.Field>
       <Button size='small' type='submit'>Submit</Button>
      <Button className='bc' size='small' onClick={() => this.props.toggleSignup()}>New? Signup</Button>
     </Form>
        :
     <Form onSubmit={(e) => this.handleSignUpSubmit(e)}>
        <h1>Signup</h1>
      <Form.Field>
        <input placeholder='Name'
        name='name' onChange={(e) => this.handleChange(e)}
         />
      </Form.Field>
      <Form.Field>
        <input placeholder='Email'
        name='email' onChange={(e) => this.handleChange(e)} />
      </Form.Field>
      <Button size='small' type='submit'>Submit</Button>
      <Button size='small' onClick={() => this.props.toggleLogin()}>Login</Button>
    </Form>
      }
    </div>
    )
  }
}
