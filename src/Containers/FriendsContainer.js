import React from "react"
import UserCard from "../Components/UserCard"

class FriendsContainer extends React.Component {
  friendsList = () => {
    return this.props.friendsArray.map((friend) => (
      <UserCard clickHandler={this.props.clickHandler} userObj={friend} />
    ))
  }
  render() {
    return (
      <>
        <h1>Friends Container</h1>
        {this.friendsList()}
      </>
    )
  }
}
export default FriendsContainer
