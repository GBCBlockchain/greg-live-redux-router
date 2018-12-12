import React from 'react';
import Header from '../components/header/header';

export default class About extends React.Component {

  render() {
    console.log(this.props.match)
    return (
      <div>
        <Header title="About Page"/>
        <h1>About Page</h1>
        <h3>{this.props.match.params.id}</h3>
      </div>
    )
  }
}
