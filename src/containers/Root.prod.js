import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import TodoApp from '../components/TodoApp'

const Root = ({ store }) => (
    <Provider store={store}>
        <TodoApp />
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root