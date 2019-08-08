import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'

const AddTodo = ({
    dispatch
}) => {
    let input

    return (
        <>
            <input ref={node => 
                input = node
            } />
        
            <button onClick={() => {
                dispatch(addTodo(input.value))
                input.value = ''
            }}>Add Todo</button>
        </>
    )
}

export default connect()(AddTodo)