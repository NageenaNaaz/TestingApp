import React from 'react';
import TextField from 'material-ui/TextField';


export default class Home extends React.Component{

  render(){
    return(
      <div>
      <h1>Hello</h1>
      <TextField
      hintText="Hint Text"
    />
    </div>
    );
  }
}
