// import React from 'react';

// export default class EventForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       customer: {
//         firstName: props.firstName,
//         lastName: props.lastName,
//         status: props.status
//       }
//     }
//   }

//   handleFirstNameChanged(event) {
//     var customer        = this.state.customer;
//     customer.firstName  = event.target.value;

//     this.setState({ customer: customer });
//   }

//   handleLastNameChanged(event) {
//     var customer      = this.state.customer;
//     customer.lastName = event.target.value;

//     this.setState({ customer: customer });
//   }

//   handleStatusChanged(event) {
//     var customer    = this.state.customer;
//     customer.status = event.target.value;

//     this.setState({ customer: customer });
//   }

//   handleButtonClicked() {
//     console.log(this.state.customer);
//   }

//   render() {
//     return (
//       <div>
//         <label>
//           First Name: 
//         </label>
//         <input type="text" value={this.state.customer.firstName} onChange={this.handleFirstNameChanged.bind(this)}/>
//         <br/>
//         <label>
//           Last Name:
//         </label>
//         <input type="text" value={this.state.customer.lastName} onChange={this.handleLastNameChanged.bind(this)}/>
//         <br/>
//         <label>
//           Status:
//         </label>
//         <button onClick={this.handleButtonClicked.bind(this)}>
//           Save Record
//         </button>
//       </div>
//     );
//   }
// }
import React from "react"
class EventForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      start_datetime: '',
      location: ''
    }
  }

  handleInput = (event) => {
    const name = event.target.name
    const newState = {}
    newState[name] = event.target.value
    this.setState(newState)
    event.preventDefault()
  }

  render () {
    return (
      <div>
        <h4>Create an Event:</h4>
        <form>
          <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleInput} />
          <input type="text" name="start_datetime" placeholder="Date" value={this.state.start_datetime} onChange={this.handleInput} />
          <input type="text" name="location" placeholder="Location" value={this.state.location} onChange={this.handleInput} />
          <button type="submit">Create Event</button>
        </form>
      </div>
    )
  }
}

export default EventForm
