// modules/Repos.js
import React,{Component} from 'react'

export default class AddRepos extends Component{

  constructor(props) {
      super(props);
   }

  render() {
    return (
      <div>
        <h1>Link Detail</h1>
        <hr/>
      </div>
    )
  }
}


AddRepos.submitForm = function(e){
  //console.dir( this.props.params.addRepo );
  var data = {
      name     : this.refs.name.state.value,
      catagory : this.refs.catagory.state.value,
      topic    : this.refs.topic.state.value,
  }
  //alert( JSON.stringify(data) );
  //console.log( Home.bind(this,data) );

  window.data.push( { link:'/repos/'+data.catagory+'/'+data.topic, name: data.name } );
  hashHistory.push('/');
}
