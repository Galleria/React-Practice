import React,{Component} from 'react';
import Header from '../component/Header.jsx'
import Footer from '../component/Footer.jsx'

const Main = React.createClass({

  render: function () {
      let contents = { marginBottom : '80px'};

      return (
          <div>
          <Header />
          <div style={contents} >
              {this.props.children}
          </div>
          <Footer />
        </div>
      );
  }
});


module.exports = Main;
