import React,{Component} from 'react';
import Header from '../component/Header.jsx'
import Footer from '../component/Footer.jsx'

const Main = React.createClass({

  render: function () {
      let contents = {'margin-bottom' : '80px'};

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
