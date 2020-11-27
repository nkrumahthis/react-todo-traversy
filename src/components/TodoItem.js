import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
    static propTypes = {
        prop: PropTypes.object.isRequired
    }

    getStyle1 = () => {
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

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textdecoration: this.props.todo.completed? 'line-through' : 'none'
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



