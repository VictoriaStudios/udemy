import {createStore} from 'redux'

const initialState = {
    counter: 0
}

const counterReducer = ( state = {initialState}, action) => {
    switch (action.type) {
        case 'INCREMENT': return {counter: state.counter+1}
        case 'DECREMENT': return {counter: state.counter-1}
    }
}

const reduxStore = createStore(counterReducer, {initialState})

export default reduxStore