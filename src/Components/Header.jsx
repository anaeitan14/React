import React, { Component } from 'react';

class Header extends Component {
    state = {} 

    render() { 
        return (
            <nav className='navbar navbar-dark bg-primary'>
                <div className='container'>
                    <a className='navbar-brand' href="/">{this.props.brand}</a>   
                </div>         
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <a className='nav-link' Style="color:black; font-weight:600;" href="/">Home</a>
                    </li>
                </ul>    
            </nav>
        );
    }
}
 
export default Header;