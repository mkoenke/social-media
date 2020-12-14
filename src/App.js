import React from "react"
import "./App.css"
import FriendsContainer from "./Containers/FriendsContainer"
import UsersContainer from "./Containers/UsersContainer"

class App extends React.Component {
  state = { friendsArray: [] }
  addClickHandler = (obj) => {
    console.log(obj)
    this.setState((prevState) => ({
      friendsArray: [...prevState.friendsArray, obj],
    }))
  }
  render() {
    return (
      <>
        <FriendsContainer friendsArray={this.state.friendsArray} />
        <UsersContainer clickHandler={this.addClickHandler} />
      </>
    )
  }
}

export default App
