import React, { Component } from "react";
import  "./Search.css";

class Search extends Component {
    state = {
      searchValue: "",
      users: []
    };
  
    handleOnChange = event => {
      this.setState({ searchValue: event.target.value });
    };
  
    handleSearch = () => {
      this.makeApiCall(this.state.searchValue);
    };
  
    makeApiCall = searchInput => {
      var searchUrl = `https://jsonplaceholder.typicode.com/users/${searchInput}`;
      fetch(searchUrl)
        .then(data => {
          return data.json();
        })
        .then(jsonData => {
          this.setState({ users: jsonData.users });
        });
    };
  
    render() {
      return (
        <div id="main">
          <h1>IBM Lab 2 - Search App</h1>
          <input
            name="text"
            type="text"
            placeholder="Type a Name or a City"
            onChange={event => this.handleOnChange(event)}
            value={this.state.searchValue}
          />
          <button onClick={this.handleSearch}>Search User</button>

          <button onClick={this.handleSearch}>Search City</button>

          {this.state.users ? (
            <div id="users-container">
              {this.state.users.map((user, index) => (
                <div class="single-user" key={index}>
                  <h2>{user.strUser}</h2>
                </div>
              ))}
            </div>
          ) : (
            <p></p>
          )}
        </div>
      );
    }
  }

export default Search;