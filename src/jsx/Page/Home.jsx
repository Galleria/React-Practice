// modules/About.js
import React from 'react';
import {Grid,Row,Col,Jumbotron,Button,Image,Label} from 'react-bootstrap';

import style from './home.styles.module.css'

export default React.createClass({
  render() {
    let cols = this.renderCard();
    return (
      <div>
         <Grid fluid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <Jumbotron>
                <h1>Welcome!</h1>
                <p>This Example show you how to use advertisement</p>
              </Jumbotron>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={6} sm={4} md={4} lg={4}>Row 1 <Label bsStyle="danger">Danger</Label></Col>
            <Col xs={6} sm={4} md={4} lg={4}>Row 2 <Label bsStyle="success">Danger</Label></Col>
            <Col xs={6} sm={4} md={4} lg={4}>Row 3 <Label bsStyle="info">Danger</Label></Col>
          </Row>
          <Row>
            {cols}
          </Row>
          <br/>
          <Row>
            <Col xs={12} sm={4} md={4} lg={4}>
              <fieldset className="wells">
                <legend>Title</legend>
                <div>
                  News
                </div>
              </fieldset>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4}>
              <fieldset className="wells">
                <legend>Title</legend>
                <div>
                  Hots
                </div>
              </fieldset>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4}>
              <fieldset>
                <legend>Title</legend>
                <div>
                  Etcs
                </div>
              </fieldset>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  },

  renderCard(){
    let cards = [];
    for( let idx=0 ; idx<9 ; idx++ ){
      let label = this.randomLabel();
      cards.push( <Col xs={6} sm={4} md={4} lg={4} className={style.col} key={idx}>
            <Image src="./src/images/thumbnail.png" rounded />
            {label}
          </Col> );
    }
    return cards;
  },

  randomLabel(){
    let label = ['','info','danger','success'];
    let random = Math.floor( (Math.random() * label.length) );
    return (random==0) ? '' : (<Label bsStyle={label[random]} className={style.label_layout} >{label[random].toUpperCase()}</Label>);
  }
})
