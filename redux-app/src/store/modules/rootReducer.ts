// Combinar vários módulos dentro de um único módulo
import { combineReducers } from 'redux'
import cart from './cart/reducer'


export default combineReducers({
    cart,
})