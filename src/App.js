/*global chrome*/
import React, { Component } from 'react';
import './styles/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: []
    }

    this.renderGoals = this.renderGoals.bind(this);
  }

  componentDidMount() {
    const $this = this;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {}, function(response) {
        $this.setState({goals: response.data});
      });
    });
  }

  renderGoals() {
    debugger;
    return this.state.goals.map((goal) => {
      return (
        <article className='goal-item'>
          <h1>{goal.goal}</h1>
        </article>
      );
    });
    }

  render() {
    return (
      <section className="bamboo-hr-extension-main">
        <section className="goals-section">
          {this.renderGoals()}
        </section>
      </section>
    );
  }
}

export default App;
