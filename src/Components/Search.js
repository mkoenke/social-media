import React from "react"

class Search extends React.Component {
  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Search by Name"
          onChange={this.props.changeHandler}
          value={this.props.searchValue}
        />
      </>
    )
  }
}
export default Search
