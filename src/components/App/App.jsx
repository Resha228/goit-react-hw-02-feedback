import React, { Component } from "react";
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { FeedbackOptions } from '../FeedbackOption/FeedbackOptions';
import { Section } from '../Section/Section';
import { Container } from './App.styled';


export  class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedback = event => {
    const score = event.target.name;
    this.setState(state => ({ [score]: state[score] + 1}));
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const persent = Math.round((good / this.countTotalFeedback()) * 100);
    return persent;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = [ 'good', 'neutral', 'bad'];
    return (
      <Container>
        <Section title = 'Please leave feedback'>
          <FeedbackOptions handle={this.handleFeedback} options={options} />
        </Section>
        <Section title = 'Statistics'> 
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </Container>
    )
  }
}
