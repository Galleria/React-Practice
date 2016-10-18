// modules/Repos.js
import React , {Component} from 'react'
import { Link } from 'react-router'
import NavLink from '../component/NavLink.jsx'

let listId = 0;
export default class Home extends Component{

  constructor(props) {
    super(props);
   }
componentWillMount(){
  console.log('componentWillMount...');
}

  render() {
console.log('rendering...');
    let listDetail = [];
    this.props.data.map( (list)=>{
      listDetail.push( <NavLink to={list.link} key={listId++}> {list.name} </NavLink> );
      listDetail.push( <br key={listId++}/> );
    });

    return (
      <div>
        <NavLink to="/addRepos" > Add New </NavLink>
        <br/>
        {listDetail}
      </div>
    )
  }
}
