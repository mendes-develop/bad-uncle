import {addUserName, addUserPhone, addOrder, removeOrder, setMain} from './actionTypes'

const initialUserState = {
    name: "",
    phone: ""
}



const initialOrderState = {
    orders: [], //order {id: 1, meal: meal[n]}
    subtotal: 0
}



const initialMainState = {
    main: []
}




export function userReducer(state = initialUserState, action){
    switch(action.type){
        case addUserName:
        return {
            ...state,
            name: action.payload
        }
        case addUserPhone:
        return {
            ...state,
            phone: action.payload
        }
        default: return state
    }

}

export function orderReducer(state = initialOrderState, action){
    switch(action.type){
        case addOrder:
        return {
            ...state,
            orders: [...state.orders, action.payload]
        }
        case removeOrder:
        return {
            ...state,
            orders: state.orders.filter(order => order !== action.payload) 
        }
        default: return state
    }
}

export function mainReducer(state = initialMainState, action){
    switch(action.type){
        case setMain:
        return {
            ...state,
            main: action.payload 
        }

        default: return state
    }
}