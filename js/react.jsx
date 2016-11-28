import React from 'react';
import ReactDOM from 'react-dom';
import X from 'content'

class World extends React.Component {
  render() {
    return <h1>Word weweld {X}</h1>
  }
}
 
ReactDOM.render(<World/>, document.body);