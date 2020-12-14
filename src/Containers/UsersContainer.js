import React from "react"
import Form from "../Components/Form"
import UserCard from "../Components/UserCard"

class UsersContainer extends React.Component {
  state = { loading: true, people: [] }
  async componentDidMount() {
    const URL = "https://api.randomuser.me/?results=20"
    const response = await fetch(URL)
    const data = await response.json()
    this.setState({ loading: false, people: data.results })
    // console.log(data.results)
  }

  submitHandler = (obj) => {
    console.log(obj)
  }

  usersArray = () => {
    return this.state.people.map((user) => <UserCard userObj={user} />)
  }
  render() {
    console.log(this.state.people)
    return (
      <>
        <Form submitHandler={this.submitHandler} />
        <h1>Users Container</h1>
        {this.state.loading || !this.state.people.length ? (
          <h1>Loading...</h1>
        ) : (
          this.usersArray()
        )}
      </>
    )
  }
}
export default UsersContainer
