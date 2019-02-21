import React from 'react';

import { Grid, Header, Segment } from 'semantic-ui-react'


const Affirmation = (props) => {

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
      
    </div>
  )
}
export default Affirmation
