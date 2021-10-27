import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.handleIsimUpdate = this.handleIsimUpdate.bind(this);
  }

  handleIsimUpdate() {
    const updateIsimVerileri = (item)=>{
      return{
        type:"ISIM_GUNCELLE",
        payload:item
      }
    }

    this.props.dispatch(updateIsimVerileri('Deneme App'));
  }


  render() {
    return (
      <div>
        <button onClick={this.handleIsimUpdate}>Güncelle</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state
}

export default connect(mapStateToProps)(App);