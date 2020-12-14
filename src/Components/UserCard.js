import React from "react"

class UserCard extends React.Component {
  getFriendObj = () => {
    // console.log(this.props.userObj)
    this.props.clickHandler(this.props.userObj)
  }

  render() {
    console.log(this.props)

    return (
      <>
        <h2>User Info:</h2>
        <h3>
          Name:{" "}
          {`${this.props.userObj.name.first} ${this.props.userObj.name.last}`}
        </h3>
        <h3>Age: {this.props.userObj.dob.age} </h3>
        <h3>Location: {this.props.userObj.location.city} </h3>
        <img
          src={this.props.userObj.picture.large}
          alt={this.props.userObj.name.first}
        />
        <br />
        <button onClick={this.getFriendObj}>Add Friend</button>
      </>
    )
  }
}
export default UserCard
