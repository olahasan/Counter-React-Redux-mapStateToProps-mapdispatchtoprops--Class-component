import React, { Component } from 'react'
import { connect } from 'react-redux';
import add from './Store/Action';
import minus from './Store/Actionminus';

class Home extends Component {

    handleChangeMinus = () => {
        this.props.minus(this.props.addre)
    }

    handleChangePlus = () => {
        this.props.add(this.props.addre)
    }

  render() {
    return (
      <div className='all'>
        <button onClick={this.handleChangeMinus}>-</button>
        <p>{this.props.addre}</p>
        <button onClick={this.handleChangePlus}>+</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
   return {
    addre : state.addre
   }
}

export default connect(mapStateToProps, {add,minus})(Home) ;



