import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

const SocialLogin = React.createClass({
    render: function () {
        return (
          <div>
            <Button bsStyle="primary">Facebook</Button>
            <br/>
            <br/>
            <Button bsStyle="primary">Google+</Button>
          </div>
        );
    }
});


module.exports = SocialLogin;
