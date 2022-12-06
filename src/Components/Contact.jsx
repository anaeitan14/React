import React, { Component } from 'react'

class Contact extends Component {
    state = { 
        showInfo:false
    } 

    onShowClick = () => {
        this.setState({showInfo: !this.state.showInfo});
    }

    render() { 
        return (
            <div className='card card-body mb-3'>
                <h3>{this.props.name} <span Style="cursor:pointer" onClick={() => this.onShowClick()}> 
                    {this.state.showInfo ? <span>&#11205;</span> : <span>&#11206;</span>}</span>
                    <span onClick={()=>this.props.onDelete(this.props.id)}Style={"cursor:pointer; float:right;"}>&#10060;</span>
                </h3>
                {this.state.showInfo ? <ul className='list-group'>
                    <li className='list-group-item'>Mail: {this.props.email}</li>
                    <li className='list-group-item'>Phone: {this.props.phone}</li>  
                </ul> : null}
            </div>
        );
    }
}

export default Contact;