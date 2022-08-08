import {
    ADD,
    START,
    STOP
} from './types'


export function startAction() {
    return {type: START}
}
export function stopAction() {
    return {type: STOP}
} 
export function addAction() {
    return {type: ADD}
}
