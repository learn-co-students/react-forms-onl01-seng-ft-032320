import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = {firstName: this.state.firstName,
    lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({
      submittedData: dataArray
    })
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }
 

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name: 
            <input type="text" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
          </label>
          <br></br>
          <label>
            Last Name: 
            <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
          </label>
          <br></br>
          <input type="submit"/>
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;