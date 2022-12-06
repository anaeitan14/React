import React, { Component } from 'react';
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    users:[
      {name:"Doron", email:"doron.ex@gmail.com", phone:"054-1231232"},
      {name:"Eitan", email:"eitanlich2000@gmail.com", phone:"555-444-222"},
      {name:"Yossi", email:"shlomo@shlomo.net", phone:"111-122-232"},
      {name:"Eran LEAVE :rage:", email:"shlomo@shlomo.net", phone:"111-122-232"},
    ]
  } 



  handleDelete = (id) => {
    this.setState({users : this.state.users[id] = null})
    this.setState({users : this.state.users.filter((person)=> person != null )})
  }

  render() { 
    return (
      <div>
        <Header brand='Contact-List'/>
        <div>
          {this.state.users.map((person, idx) => (
          <Contact 
            key={idx} 
            id={idx} 
            name={person.name}
            email={person.email} 
            phone={person.phone} 
            onDelete={this.handleDelete}/>
           ))}
        </div>
      </div>
    );
  }
}
 
export default App;