import React, { Component } from 'react';


class Form extends Component {
    state = {  } 
    render() { 
        return (
            <form>
                <label>Name  
                    <input type="text" name="new_name"/>
                </label>

                <label>Email 
                    <input type="text" name="new_mail"/>
                </label> 
              
                <label>Phone 
                    <input type="text" name="new_phone"/>
                </label>
       
                <input type="button" value="Add" onClick={()=>this.props.onAdd()}/>
            </form>
        );
    }
}
 
export default Form;