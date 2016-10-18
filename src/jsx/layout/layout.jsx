import React,{Component} from 'react';
import Header from '../component/Header.jsx'
import Footer from '../component/Footer.jsx'

const Main = React.createClass({
    render: function () {

        return (
            <div>
            <Header />
            <div className='container'>
              <hr />
                {this.props.children}
              <hr />
            </div>
            <Footer />
          </div>
        );
    }
});


module.exports = Main;
