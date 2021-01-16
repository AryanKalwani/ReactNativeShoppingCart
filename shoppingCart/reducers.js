import { act } from 'react-test-renderer';
import { combineReducers } from 'redux';

const counter = (state = 0, action) => {
    switch(action.type) {
      case 'INCREMENT': 
        return state+1;
      case 'DECREMENT': 
        return state-1;
      default:
          return state;
    }
}

const totalPrice = (state = 0, action) => {
    switch(action.type) {
        case 'INCREASEPRICE':
            return state+action.price;
        case 'DECREASEPRICE':
            return state-action.price;
        default: 
            return state;
    }
}

const initialUserState = {
    arr:{},
}

const listItems = (state = initialUserState, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            if (action.itemName in state.arr) {
                state.arr[action.itemName] = state.arr[action.itemName]+1;
                return {
                    ...state,
                    arr: {
                        ...state.arr
                    }
                }
            } else {
                return {
                    ...state,
                    arr: {
                        ...state.arr, [action.itemName]: 1
                    }
                }
            }
        case 'REMOVE_ITEM':
            if (state.arr[action.itemName]>0) {
                state.arr[action.itemName] =state.arr[action.itemName]-1;
            }
                return {
                    ...state,
                    arr: {
                        ...state.arr
                    }
                }
        default:
            return state;
    }
}

const itemPrice = (state={}, action) => {
    switch (action.type) {
        case 'ADD_PRICE': 
        return {
            ...state,
            arr: {
                ...state.arr, [action.itemName]: action.itemPrice
            }
        }
        default: 
            return state
    }
}

const rootReducer = combineReducers({
    counter,
    totalPrice,
    listItems,
    itemPrice
});

export default rootReducer;
  