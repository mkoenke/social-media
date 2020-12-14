import React from "react"

class Form extends React.Component {
  state = {
    name: "",
    age: "",
    location: "",
    image: "",
  }
  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }
  getUserObj = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
  }
  render() {
    console.log(this.state)
    return (
      <>
        <h1>Sign Up</h1>
        <form onSubmit={this.getUserObj}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name"
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="age"
            value={this.state.age}
            placeholder="age"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="location"
            value={this.state.location}
            placeholder="location"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="image"
            value={this.state.image}
            placeholder="image url"
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </>
    )
  }
}
export default Form
