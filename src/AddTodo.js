import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
            id: '',
        action: ''
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            id: '',
            action: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">ADD TODO:</label>
                    <input type="text" id="action" onChange={this.handleChange} value={this.state.action}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;