import Pizza from './pizza'
import Ingredients from './ingredients'
import {combineReducers} from 'redux'

const mainReducer = combineReducers({
  Pizza ,Ingredients
})

export default mainReducer;
