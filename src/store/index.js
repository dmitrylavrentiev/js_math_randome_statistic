import { createStore } from 'redux'

import { ADD, START, STOP } from './types'

const columnsNumber = 25
const initData = []
for(let i = 0; i < columnsNumber; i++) {
    initData.push({id: i, val: 0})
}

const initState = {
    data: initData,
    isStop: true,
    randomeNumber: null,
    total: 0,
    max: 0
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case ADD: {
            const num = Math.floor(Math.random() * (columnsNumber + 1))
            const newState = {...state}
            newState.data[num].val = newState.data[num].val + 1
            let max = state.max
            if(max < newState.data[num].val) {
                max = newState.data[num].val
            }
            return {...newState, randomeNumber: num, total: state.total + 1, max}
        }
        case START:
            return {...state, isStop: false}
        case STOP:
            return {...state, isStop: true} 
        default:
            return state       
    }
}

const store = createStore(reducer)

export default store