import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <form style={{display: flex}}>
                <input type="text" name="title" id="" placeholder="add Todo ..." style={{flex:'10'}}/>
                <input type="submit" value="submit" className="btn" style={{flex:'1'}}/>
            </form>
        )
    }
}

export default AddTodo
