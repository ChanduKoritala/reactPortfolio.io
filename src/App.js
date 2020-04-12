import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <div className="demo-big-content">
          <Layout>
            <Header className="header-color" title="Sri Krishna Chandu Koritala" scroll>
              <Navigation>
              <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Content>
              <div className="page-content" style={{ color: 'white' }}>
                <Main />
              </div>
            </Content>
          </Layout>
        </div>
      </div>
    );
  }

}

export default App;
