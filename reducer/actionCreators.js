import {addUserName, addUserPhone, addOrder, removeOrder, setMain} from './actionTypes'

export function actionAddUsername(data){
    return {
        type: addUserName,
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