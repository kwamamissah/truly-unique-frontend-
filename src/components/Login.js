import React, {Component} from 'react';
import { Button, Header, Form } from 'semantic-ui-react'


export default class Login extends Component{

  state = {
    name: '',
    email: ''
  }



  render(){
    return(
      <Form>
       <Form.Field>
         <label>Name</label>
         <input placeholder='Name' />
       </Form.Field>
       <Form.Field>
         <label>Email</label>
         <input placeholder='Email' />
       </Form.Field>
       <Button type='submit'>Submit</Button>
     </Form>
    )
  }
}
