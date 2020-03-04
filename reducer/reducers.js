import {createStore, combineReducers} from 'redux'
import {addUserID, addUserPhone, addOrder, removeOrder, setMain, addToken, changeLogged} from './actionTypes'

const initialUserState = {
    id: "",
    phone: "",
    token: "",
    isLogged: false
}



const initialOrderState = {
    orders: [], 
    subtotal: 0
}



const initialMainState = {
    main: []
}




function userReducer(state = initialUserState, action){
    switch(action.type){
        case addUserID:
        return {
            ...state,
            id: action.payload
        }
        case addUserPhone:
        return {
            ...state,
            phone: action.payload
        }
        case addToken :
            return {
                ...state,
                toke: action.payload
            }
        case changeLogged:
            return {
                ...state,
                isLogged: action.payload
            }
        default: return state
    }

}

function orderReducer(state = initialOrderState, action){
    switch(action.type){
        case addOrder:
        return {
            ...state,
            orders: [...state.orders, action.payload.order],
            subtotal: state.subtotal += parseFloat(action.payload.subtotal)
        }
        case removeOrder:
        return {
            ...state,
            orders: state.orders.filter(order => order !== action.payload.order),
            subtotal : state.subtotal -= parseInt(action.payload.subtotal)
        }
        default: return state
    }
}

function mainReducer(state = initialMainState, action){
    switch(action.type){
        case setMain:
        return {
            ...state,
            main: action.payload 
        }

        default: return state
    }
}

const store = createStore(
    combineReducers({userReducer, orderReducer, mainReducer})
)

export default store