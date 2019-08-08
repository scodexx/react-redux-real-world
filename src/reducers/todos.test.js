import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import todos from './todos'

describe('testAddTodo', () => {
    it('Should not mutate', () => {
        const stateBefore = []
        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux'
        }

        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            }
        ]

        deepFreeze(stateBefore)
        deepFreeze(stateAfter)

        expect(
            todos(stateBefore, action)
        ).eql(stateAfter)
    })
})

describe('testToggleTodo', () => {
    it('Should not mutate', () => {
        const stateBefore = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            }, {
                id: 1,
                text: 'Go shopping',
                completed: false
            }
        ]

        const action = {
            type: 'TOGGLE_TODO',
            id: 1
        }

        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            }, {
                id: 1,
                text: 'Go shopping',
                completed: true
            }
        ]

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(
            todos(stateBefore, action)
        ).eql(stateAfter)
    })
})