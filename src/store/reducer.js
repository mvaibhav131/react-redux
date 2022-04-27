import { DECREMENT, DECREMENT20, INCREMENT, INCREMENT5 } from "./actiontypes";


export const reducer=(state,action)=>{
    switch(action.type){
        case INCREMENT:{
            return {
                ...state,
                count:state.count+action.payload,
            };
        }
        case DECREMENT:{
            return {
                ...state,
                count:state.count-action.payload,
            };
        }
        
        default:{
            return state;
        }
    }
};