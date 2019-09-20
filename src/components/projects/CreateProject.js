import React, { Component } from 'react'

export default class CreateProject extends Component {
    state = {
        title:'',
        content:''
    }

    // create function to HANDLE CHANGE/monitor whenever user types anything on form
    handleChange = (e) => {
        // console.log(e)
        this.setState({
            [e.target.id]: e.target.value 
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className='container'>
                <form className='white' onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">New Project</h5>

                    <div className='input-field'>
                        <label htmlFor='title'>Title</label>
                        <input type="text" id='title' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    
                    <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

