import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Grid, Row, Col } from "react-bootstrap";
import './App.css';

class App extends Component {
  render() {
    return (
      <Quotes/>
    );
  }
}

class Quotes extends Component{
  constructor() {
   super();
   this.state = {
     quoteData: null
   };
 }
  componentDidMount() {
    const URL = "https://talaikis.com/api/quotes/random/";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({quoteData: json});
    });
  }
  render(){
      const quoteData = this.state.quoteData;
      if(!quoteData) return <div>Still Loading</div>;
      const quoteCategory = quoteData.cat;
      return (
        <div>
          <Grid>
            <Row>
              <Col md={10} sm={10}>
                <h4>{quoteData.quote}</h4>
                <h5>{quoteData.author}</h5>
                <p>{quoteData.cat}</p>
              </Col>
            </Row>
          </Grid>
        </div>
      );
  }
}

export default App;
