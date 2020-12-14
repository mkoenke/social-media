import React from "react"
import Form from "../Components/Form"
import Search from "../Components/Search"
import UserCard from "../Components/UserCard"

class UsersContainer extends React.Component {
  state = { loading: true, people: [], searchValue: "" }
  async componentDidMount() {
    const URL = "https://api.randomuser.me/?results=20"
    // const URL = "https://localhost3000/users"
    const response = await fetch(URL)
    const data = await response.json()
    this.setState({ loading: false, people: data.results })
    // console.log(data.results)
  }

  submitHandler = (obj) => {
    console.log(obj)
    let newArray = [...this.state.people, obj]
    this.setState({ people: newArray }, () => console.log(this.state))
  }

  changeHandler = (e) => {
    console.log(e.target.value)
    this.setState({ searchValue: e.target.value })
  }

  filteredArray = () => {
    return this.state.people.filter((user) =>
      user.name.first
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase())
    )
  }

  usersArray = () => {
    return this.filteredArray().map((user) => (
      <UserCard clickHandler={this.props.clickHandler} userObj={user} />
    ))
  }
  render() {
    console.log(this.state.people)
    return (
      <>
        <Form submitHandler={this.submitHandler} />
        <h1>Users Container</h1>
        <Search
          changeHandler={this.changeHandler}
          searchValue={this.state.searchValue}
        />
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
