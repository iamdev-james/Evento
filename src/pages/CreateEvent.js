import React, { Component } from 'react'
import { Form1, Form2, Confirmation, Success } from '../components'

export default class Signup extends Component {

  state = {
    step: 1,
    eventname: '',
    eventdate: '', 
    eventlocation: '',
    eventdescription: '',
    eventimage: '',
    eventcolor: '',
    eventtype: '',
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { eventname, eventdate, eventlocation, eventdescription, eventimage, eventtype } = this.state;
    const values = { eventname, eventdate, eventlocation, eventdescription, eventimage, eventtype }
    
    switch(step) {
      case 1: 
        return (
          <Form1
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 2: 
        return (
          <Form2
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 3: 
          return (
            <Confirmation
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )
        case 4: 
          return (
            <Success />
          )
      default: 
          // do nothing
    }
  }
}