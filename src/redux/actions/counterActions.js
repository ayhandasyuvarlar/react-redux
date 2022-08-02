import * as actionTypes from './actionTypes'

export const  increaseCounter = () =>({
    type : actionTypes.INCREASE_COUNTER , 
    poyload : 1
})
export const  decreaseCounter = () =>({
    type : actionTypes.DECREASE_COUNTER, 
    poyload : 1
})

export const  inreaseByTwoCounter = () =>({
    type : actionTypes.INCREASE_BY_TWO_COUNTER, 
    poyload : 2
})
