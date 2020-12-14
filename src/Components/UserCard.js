import React from "react"

class UserCard extends React.Component {
  render() {
    console.log(this.props)
    return (
      <>
        <h2>User Info:</h2>
        <h3>Name: {this.props.userObj.name.first}</h3>
        <h3>Age: {this.props.userObj.dob.age} </h3>
        <h3>Location: {this.props.userObj.location.city} </h3>
        <img
          src={this.props.userObj.picture.large}
          alt={this.props.userObj.name.first}
        />
      </>
    )
  }
}
export default UserCard
