// modules/Repos.js
import React , {Component} from 'react'
import { Link } from 'react-router'
import NavLink from '../component/NavLink.jsx'
import "isomorphic-fetch"
import List from './List.jsx'
import Promise from 'bluebird'

export default class ListServer extends Component{

  constructor(props , context) {
    super(props,context);
    //console.log( 'props ');
    this.state = {
      listdata : []
    }
    if( context.data ){
      this.state.listdata = context.data;
    }
    //this.fetchData = this.fetchData.bind(this);
  }
/*
  fetchData(){
    fetch('http://127.0.0.1:8009/listsAll')
      .then( (response) => response.json() )
      .then( (json) => {
        this.setState({listdata:json});
      }).catch( (err)=> {
        console.log( err );
      });
  }
*/
  componentWillMount(){

    if (!this.props.initialState || !this.props.initialState.self) {
      return;
    }

    //this.setState(this.props.initialState.self);

  }

  componentDidMount(){
    ListServer.fetchData();
  }

  render() {
    return (
      <div>
        <List data={this.state.listdata} />
      </div>
    )
  }

}

ListServer.contextTypes = {
   data: React.PropTypes.oneOfType([
     React.PropTypes.object,
     React.PropTypes.array
   ]).isRequired
};

ListServer.fetchData = ()=>{

  return fetch('http://127.0.0.1:8009/listsAll')
    .then( (response) => response.json() )
    .then( (json) => {
      return json;
    }).catch( (err)=> {
      console.log( err );
    });
  console.log('fetchData already from ListServer...');

}

ListServer.prepareForRequest = function() {
  return ListServer.fetchData() ;
};
