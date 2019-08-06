import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Nav from './components/Nav';
import Content from './components/Content';
import Card from './components/Card';
import CardContainer from './components/CardContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Nav />
          <Content>
            <div>
              <h2>Say hello to ReactJS</h2>
              <p>You will learn a Frontend framework from scratch to become a bad as fullstack developer</p>
            </div>
            <Button name="Awesome!" />
          </Content>
        </Header>
        <CardContainer>
          <Card 
          image="/starter-code/src/images/icon1.png"
          title="Declarative"
          description="React makes it painless to create interactive UIs."
          />
          <Card 
          image="/images/icon2.png"
          title="Components"
          description="Build encapsulated components that manage their state."
          />
          <Card 
          image="./images/icon3.png"
          title="Single-Way"
          description="A set of immutable values are passed to the components."
          />
          <Card 
          image="./images/icon4.png"
          title="JSX"
          description="Atatically-typed, designed to run on modern browsers."
          />
        </CardContainer>
      </div>
    );
  }
}

export default App;
