import { DECREMENT, INCREMENT } from "./actiontypes";



export const incrementCounter=(payload)=>({
    type:INCREMENT,
    payload,
});

export const decrementCounter=(payload)=>({
    type:DECREMENT,
    payload,
});

