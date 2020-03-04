import {addUserID, addUserPhone, addOrder, removeOrder, setMain, changeLogged, addToken} from './actionTypes'

export function actionAddUserID(data){
    return {
        type: addUserID,
        payload: data
    }
}
export function actionAddToken(data){
    return {
        type: addToken,
        payload: data
    }
}
export function actionChangeLogged(data){
    return {
        type: changeLogged,
        payload: data
    }
}
export function actionAddUserPhone(data){
    return {
        type: addUserPhone,
        payload: data
    }
}
export function actionAddOrder(data){
    return {
        type: addOrder,
        payload: data
    }
}
export function actionRemoveOrder(data){
    return {
        type: removeOrder,
        payload: data
    }
}

export function actionSetMain(data){
    return {
        type: setMain,
        payload: data
    }
}