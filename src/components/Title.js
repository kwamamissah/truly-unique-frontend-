import React from 'react';
import { Grid, Header, Segment, Button } from 'semantic-ui-react'


const Title = (props) => {

  let months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"]
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  let use = new Date()
  let day = days[use.getDay()]
  let month = months[use.getMonth()]
  let year = use.getFullYear()
  let date = use.getDate()
  let today = day + " " + month + " " + date + ", " + year

  return(
    <div>
    <Grid divided='vertically' inverted>
     <Grid.Row columns={1}>
       <Grid.Column textAlign='center'>
        <Segment raised inverted color='olive'>
         <Header style={{ fontFamily: 'Amatic SC, cursive', fontSize: '40px' }}>Truly Unique (: </Header>
         <Button onClick={() => props.clickHandler()} >
           {props.getStarted ? '(:' : 'Get Started'}
         </Button>

        </Segment>
       </Grid.Column>
     </Grid.Row>
    </Grid>

   <Segment textAlign='center' style={{ fontFamily: 'Indie Flower, cursive', fontSize: '25px' }} >{ today }</Segment>
   </div>
  )
}

export default Title
