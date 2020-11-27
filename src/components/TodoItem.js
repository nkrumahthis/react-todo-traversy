import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    static propTypes = {
        prop: PropTypes.object.isRequired
    }

    render() {
        const {id, title} = this.props.todo;

        const getStyle = () => {
            return {
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textdecoration: this.props.todo.completed? 'line-through' : 'none'
            }
        }

        const btnStyle = {
            background: '#ff0000',
            color: '#fff',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '50%',
            cursor: 'pointer',
            float: 'right'
        }

        return (
            <div style={getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> 
                    {' '}
                    {title}
                    <button style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

    export default TodoItem;



