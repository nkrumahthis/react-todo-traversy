import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
    static propTypes = {
        prop: PropTypes.object.isRequired
    }

    getStyle = () => {
        if(this.props.todo.completed){
            return{
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }
    }

    

    render() {
        return (
            <div style={this.getStyle()}>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

const itemSTyle = {
        backgroundColor: "#f4f4f4"
    }



