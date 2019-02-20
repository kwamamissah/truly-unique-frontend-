import React from 'react';
import { Grid, Header, Segment, Button } from 'semantic-ui-react'


const Title = (props) => {

  return(
    <Grid divided='vertically' inverted>
     <Grid.Row columns={1}>
       <Grid.Column textAlign='center'>
        <Segment raised inverted color='olive'>
         <Header style={{ fontFamily: 'Amatic SC, cursive', fontSize: '40px' }}>Truly Unique (: </Header>
         <Button animated>
           <Button.Content visible>Get Started</Button.Content>
           <Button.Content hidden>(:</Button.Content>
         </Button>
        </Segment>
       </Grid.Column>
     </Grid.Row>
    </Grid>
  )
}

export default Title
