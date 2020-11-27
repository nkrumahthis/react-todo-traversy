import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
    static propTypes = {
        prop: PropTypes.object.isRequired
    }

    render() {
        return (
            <div style={{backgroundColor: "#f4f4f4"}}>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

