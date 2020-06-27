import {
  FETCH_PIZZAS, FETCH_PIZZAS_SUCCESS, FETCH_PIZZAS_FAILURE, RESET_PIZZAS,
  FETCH_PIZZA, FETCH_PIZZA_SUCCESS,  FETCH_PIZZA_FAILURE, RESET_ACTIVE_PIZZA,
  CREATE_PIZZA, CREATE_PIZZA_SUCCESS, CREATE_PIZZA_FAILURE, RESET_NEW_PIZZA,
  DELETE_PIZZA, DELETE_PIZZA_SUCCESS, DELETE_PIZZA_FAILURE, RESET_DELETED_PIZZA,
  VALIDATE_PIZZA_FIELDS,VALIDATE_PIZZA_FIELDS_SUCCESS, VALIDATE_PIZZA_FIELDS_FAILURE, RESET_PIZZA_FIELDS
} from '../actions/pizzaActions';


const INITIAL_STATE = { pizzasList: {pizzas: [], error:null, loading: false},
  newPizza:{pizza:null, error: null, loading: false},
  activePizza:{pizza:null, error:null, loading: false},
  deletedPizza: {pizza: null, error:null, loading: false},
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case FETCH_PIZZAS:// start fetching pizzas and set loading = true
      return { ...state, pizzasList: {pizzas:[], error: null, loading: true} };
    case FETCH_PIZZAS_SUCCESS:// return list of pizzas and make loading = false
      return { ...state, pizzasList: {pizzas: action.payload, error:null, loading: false} };
    case FETCH_PIZZAS_FAILURE:// return error and make loading = false
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return { ...state, pizzasList: {pizzas: [], error: error, loading: false} };
    case RESET_PIZZAS:// reset pizzaList to initial state
      return { ...state, pizzasList: {pizzas: [], error:null, loading: false} };

    case FETCH_PIZZA:
      return { ...state, activePizza:{...state.activePizza, loading: true}};
    case FETCH_PIZZA_SUCCESS:
      return { ...state, activePizza: {pizza: action.payload, error:null, loading: false}};
    case FETCH_PIZZA_FAILURE:
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return { ...state, activePizza: {pizza: null, error:error, loading:false}};
    case RESET_ACTIVE_PIZZA:
      return { ...state, activePizza: {pizza: null, error:null, loading: false}};

    case CREATE_PIZZA:
      return {...state, newPizza: {...state.newPizza, loading: true}}
    case CREATE_PIZZA_SUCCESS:
      return {...state, newPizza: {pizza:action.payload, error:null, loading: false}}
    case CREATE_PIZZA_FAILURE:
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return {...state, newPizza: {pizza:null, error:error, loading: false}}
    case RESET_NEW_PIZZA:
      return {...state,  newPizza:{pizza:null, error:null, loading: false}}


    case DELETE_PIZZA:
      return {...state, deletedPizza: {...state.deletedPizza, loading: true}}
    case DELETE_PIZZA_SUCCESS:
      return {...state, deletedPizza: {pizza:action.payload, error:null, loading: false}}
    case DELETE_PIZZA_FAILURE:
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return {...state, deletedPizza: {pizza:null, error:error, loading: false}}
    case RESET_DELETED_PIZZA:
      return {...state,  deletedPizza:{pizza:null, error:null, loading: false}}

    case VALIDATE_PIZZA_FIELDS:
      return {...state, newPizza:{...state.newPizza, error: null, loading: true}}
    case VALIDATE_PIZZA_FIELDS_SUCCESS:
      return {...state, newPizza:{...state.newPizza, error: null, loading: false}}
    case VALIDATE_PIZZA_FIELDS_FAILURE:
      let result = action.payload;
      if(!result) {
        error = {message: action.payload.message};
      } else {
        error = {title: result.title, categories: result.categories, description: result.description};
      }
      return {...state, newPizza:{...state.newPizza, error: error, loading: false}}
    case RESET_PIZZA_FIELDS:
      return {...state, newPizza:{...state.newPizza, error: null, loading: null}}
    default:
      return state;
  }
}
