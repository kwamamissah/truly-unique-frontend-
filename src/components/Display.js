import React from 'react';
import { Loader } from 'semantic-ui-react'

const Display = (props) => {

  console.log(props.affirmation)

  let words = () => {
    if (props.affirmation === undefined) {
      return <Loader active inline='centered' />
    } else {

      return props.affirmation
    }
  }

  return(
    <div>
      <h1>{words().title}</h1>
      <h4>{words().content}</h4>
    </div>
  )
}

export default Display
