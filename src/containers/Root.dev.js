import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import TodoApp from '../components/TodoApp'

const Root = ({ store }) => (
    <Provider store={store}>
        <TodoApp />
        <DevTools />
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root