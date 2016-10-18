import React , {Component} from 'react'

export default class DataWrapper extends Component {

  getChildContext () {
    return {
      data: this.props.data
    };
  }

  render () {
    //console.log( this.props.children );
    return this.props.children;
  }
}

DataWrapper.childContextTypes = {
  data: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array
  ])//.isRequired
};
