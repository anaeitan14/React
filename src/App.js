import React, { Component } from 'react';
import Header from "./components/Header";
import Contact from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    new_name: "", new_mail: "", new_phone: "", search: "",
    users: [],
    toggleAdd: false,
    searchQuery: false,
    searchArray: []
  }


  handleDelete = (id) => {
    const areYouSure = window.confirm(`Do you want to delete the contact ${this.state.users[id].name}?`)
    if (areYouSure) {
      let tempUsers = this.state.users;
      tempUsers.splice(id, 1);
      this.setState({ users: tempUsers })
    }
  }

  HandleAdd = () => {
    if (this.state.new_name === "") {
      return;
    }

    const temp = [{
      name: this.state.new_name,
      email: this.state.new_mail,
      phone: this.state.new_phone
    }];

    const extendedUsers = temp.concat(this.state.users);
    this.setState({ users: extendedUsers });
  }

  HandleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  clickPersonAdd = () => {
    this.setState({ toggleAdd: !this.state.toggleAdd })
  }

  componentWillMount() {
    localStorage.getItem('users') &&
      this.setState({ users: JSON.parse(localStorage.getItem('users')) });
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('users', JSON.stringify(nextState.users));
  }


  handleSort = () => {
    let tempUsers = this.state.users;
    console.log(tempUsers);
    tempUsers.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    })
    this.setState({ users: tempUsers })

  }

  handleSearch = () => {
    let search_query = this.state.search;
    let searchArray = this.state.users.filter((user) => {
      return user.name.includes(search_query);
    })

    console.log(searchArray)

    searchArray.map((person, idx) => (
      <Contact
        key={idx}
        id={idx}
        name={person.name}
        email={person.email}
        phone={person.phone}
        onDelete={this.handleDelete} />
    ))


  }

  render() {
    return (
      <div>
        <Header brand='Contact-List' />
        <div className='container p-2'>
          <span Style="font-size:50px; color:navy; cursor:pointer;" onClick={this.clickPersonAdd}>&#128104;&#8205;&#128188;
            {this.state.toggleAdd ? <>&#8722;</> : <>&#43;</>}</span>
          {this.state.toggleAdd ? (
            <form Style="padding:30px; background-color:lightblue;">
              <label>Name:<input type="text" name="new_name" onChange={this.HandleChange} /></label>
              <label>Email:<input type="text" name="new_mail" onChange={this.HandleChange} /></label>
              <label>Phone:<input type="text" name="new_phone" onChange={this.HandleChange} /></label>
              <input type="button" value="Add" onClick={this.HandleAdd} />
            </form>
          ) : null}
          <input type="text" placeholder="Search a name..." name="search" onChange={this.HandleChange} Style="margin:20px;"></input>
          <input type="button" value="Find" onClick={this.handleSearch}></input>
          <input type="button" onClick={this.handleSort} value="Sort alphabetically"></input>
          {this.state.users.map((person, idx) => (
            <Contact
              key={idx}
              id={idx}
              name={person.name}
              email={person.email}
              phone={person.phone}
              onDelete={this.handleDelete} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

