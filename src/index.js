/**
 * https://github.com/tayiorbeii/egghead.io_redux_course_notes
 * https://github.com/tayiorbeii/egghead.io_idiomatic_redux_course_notes
 * https://github.com/tayiorbeii/es6_learning_notes
 */
import React from 'react'
import ReactDOM from 'react-dom'

import Root from './containers/Root'
import configureStore from './store/configureStore'
import register from './registerServiceWorker'

const store = configureStore()

ReactDOM.render( 
    <Root store={store} />,
    document.getElementById('root')
)

register()