/*global chrome*/
import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import './styles/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: []
    }

    this.drawChart = this.drawChart.bind(this);
  }

  componentDidMount() {
    const $this = this;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {}, function(response) {
        $this.setState({goals: response.data});
      });
    });
  }

  drawChart() {
    const data = {
      labels: [
        'Completed',
        'In Progress',
        'Pending'
      ],
      datasets: [{
        data: [
          this.state.goals.filter((goal) => {
            return goal.progress === 100
          }).length,
          this.state.goals.filter((goal) => {
            return goal.progress > 0 && goal.progress < 100
          }).length,
          this.state.goals.filter((goal) => {
            return goal.progress === 0
          }).length
        ],
        backgroundColor: [
          '#36A2EB',
          '#00b136',
          '#b40b13',
        ],
        hoverBackgroundColor: [
          '#36A2EB',
          '#00b136',
          '#b40b13',
        ]
      }]
    }
    return <Pie data={data} />
  }

  render() {
    return (
      <section className="bamboo-hr-extension-main">
        <section className="goals-section">
          {this.drawChart()}
        </section>
        <section className="information-section">
          Total: {this.state.goals.length}
        </section>
      </section>
    );
  }
}

export default App;
