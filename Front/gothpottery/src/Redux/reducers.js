import {combineReducers} from 'redux';
import productReducer from './Reducers/productReducer'


//reducers being combined
const defaultReducer = combineReducers({
    product: productReducer,
})

export default defaultReducer;