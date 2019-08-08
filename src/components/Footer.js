import React from 'react'
import FilterLink from './FilterLink'

export default ({ store }) => (
    <p>
        Show:
        {' '}
        <FilterLink 
            store={store}
            filter="SHOW_ALL">
            All
        </FilterLink>
        {' '}
        <FilterLink 
            store={store}
            filter="SHOW_ACTIVE">
            Active
        </FilterLink>
        {' '}
        <FilterLink 
            store={store}
            filter="SHOW_COMPLETED">
            Completed
        </FilterLink>
    </p>
)