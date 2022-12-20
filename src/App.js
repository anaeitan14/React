import React, { Component } from 'react';
import Header from "./components/Header";
import Contact from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    users: [
      { name: "Doron", email: "doron.ex@gmail.com", phone: "054-1231232" },
      { name: "Eitan", email: "eitanlich2000@gmail.com", phone: "555-444-222" },
      { name: "Yossi", email: "shlomo@shlomo.net", phone: "111-122-232" },
    ]
  }


  handleDelete = (id) => {
    const areYouSure = window.confirm(`Do you want to delete the contact ${this.state.users[id].name}?`)
    if (areYouSure) {
      let tempUsers = this.state.users;
      tempUsers.splice(id, 1);
      this.setState({ users: tempUsers })
    }
  }

  render() {
    return (
      <div>
        <Header brand='Contact-List' />
        <div className='container p-2'>
          <form>
            <label>Name:<input type="text" name="new_name" onChange={this.HandleChange} /></label>
            <label>Email:<input type="text" name="new_mail" onChange={this.HandleChange} /></label>
            <label>Phone:<input type="text" name="new_phone" onChange={this.HandleChange} /></label>
            <input type="button" value="Add" onClick={() => this.handleAdd} />
          </form>
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