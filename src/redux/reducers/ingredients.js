import {
    FETCH_INGREDIENTS, FETCH_INGREDIENTS_SUCCESS, FETCH_INGREDIENTS_FAILURE, RESET_INGREDIENTS,
    FETCH_INGREDIENT, FETCH_INGREDIENT_SUCCESS,  FETCH_INGREDIENT_FAILURE, RESET_ACTIVE_INGREDIENT,
    CREATE_INGREDIENT, CREATE_INGREDIENT_SUCCESS, CREATE_INGREDIENT_FAILURE, RESET_NEW_INGREDIENT,
    DELETE_INGREDIENT, DELETE_INGREDIENT_SUCCESS, DELETE_INGREDIENT_FAILURE, RESET_DELETED_INGREDIENT,
    VALIDATE_INGREDIENT_FIELDS,VALIDATE_INGREDIENT_FIELDS_SUCCESS, VALIDATE_INGREDIENT_FIELDS_FAILURE, RESET_INGREDIENT_FIELDS
} from '../actions/ingredientsActions';


const INITIAL_STATE = { ingredientsList: {ingredients: [
            {
                "name": "Aceitunas",
                "image": "files/data/aceitunas.png",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Cebolla",
                "image": "files/data/cebolla.jpg",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Cereza",
                "image": "files/data/cereza.jpg",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Cereza",
                "image": "files/data/cereza.jpg",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Champiñones",
                "image": "files/data/champinones.png",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Ciruelas",
                "image": "files/data/ciruela.png",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Jalapeños",
                "image": "files/data/jalapenos.png",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Maiz",
                "image": "files/data/maiz.jpg",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Pepinillos",
                "image": "files/data/pepinillos.png",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Pimenton",
                "image": "files/data/pimenton.png",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Piña",
                "image": "files/data/pina.jpeg",
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Queso Americano",
                "image": "files/data/americano.jpg",
                "price": 3000,
                "type": "quesos",
                "status": 0
            },
            {
                "name": "Mozzarella",
                "image": "files/data/mozzarella.jpg",
                "price": 3000,
                "type": "quesos",
                "status": 0
            },
            {
                "name": "Queso Azul",
                "image": "files/data/quesoAzul.png",
                "price": 3000,
                "type": "quesos",
                "status": 0
            },
            {
                "name": "Salsa de Tomate",
                "image": "files/data/salasatomate.png",
                "price": 3000,
                "type": "salsas",
                "status": 0
            },
            {
                "name": "Salsa BBQ",
                "image": "files/data/salsabbq.png",
                "price": 3000,
                "type": "salsas",
                "status": 0
            },
            {
                "name": "Salsa Marinara",
                "image": "files/data/salsamarinara.jpg",
                "price": 3000,
                "type": "salsas",
                "status": 0
            },
            {
                "name": "Tocineta",
                "image": "files/data/tocineta.png",
                "price": 3000,
                "type": "carnes",
                "status": 0
            },
            {
                "name": "Carne",
                "image": "files/data/carne.png",
                "price": 3000,
                "type": "carnes",
                "status": 0
            },
            {
                "name": "Chorizo",
                "image": "files/data/chorizo.jpg",
                "price": 3000,
                "type": "carnes",
                "status": 0
            },
            {
                "name": "Jamon",
                "image": "files/data/jamon.png",
                "price": 3000,
                "type": "carnes",
                "status": 0
            },
            {
                "name": "Pollo",
                "image": "files/data/pollo.jpg",
                "price": 5000,
                "type": "carnes",
                "status": 0
            },
            {
                "name": "Peperoni",
                "image": "files/data/peperoni.jpg",
                "price": 4500,
                "type": "carnes",
                "status": 0
            }
        ], error:null, loading: false},
    newIngredient:{ingredient:null, error: null, loading: false},
    activeIngredient:{ingredient:null, error:null, loading: false},
    deletedIngredient: {ingredient: null, error:null, loading: false},
};

export default function(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {

        case FETCH_INGREDIENTS:// start fetching ingredients and set loading = true
            return { ...state, ingredientsList: {ingredients:[], error: null, loading: true} };
        case FETCH_INGREDIENTS_SUCCESS:// return list of ingredients and make loading = false
            return { ...state, ingredientsList: {ingredients: action.payload, error:null, loading: false} };
        case FETCH_INGREDIENTS_FAILURE:// return error and make loading = false
            error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            return { ...state, ingredientsList: {ingredients: [], error: error, loading: false} };
        case RESET_INGREDIENTS:// reset ingredientList to initial state
            return { ...state, ingredientsList: {ingredients: [], error:null, loading: false} };

        case FETCH_INGREDIENT:
            return { ...state, activeIngredient:{...state.activeIngredient, loading: true}};
        case FETCH_INGREDIENT_SUCCESS:
            return { ...state, activeIngredient: {ingredient: action.payload, error:null, loading: false}};
        case FETCH_INGREDIENT_FAILURE:
            error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            return { ...state, activeIngredient: {ingredient: null, error:error, loading:false}};
        case RESET_ACTIVE_INGREDIENT:
            return { ...state, activeIngredient: {ingredient: null, error:null, loading: false}};

        case CREATE_INGREDIENT:
            return {...state, newIngredient: {...state.newIngredient, loading: true}}
        case CREATE_INGREDIENT_SUCCESS:
            return {...state, newIngredient: {ingredient:action.payload, error:null, loading: false}}
        case CREATE_INGREDIENT_FAILURE:
            error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            return {...state, newIngredient: {ingredient:null, error:error, loading: false}}
        case RESET_NEW_INGREDIENT:
            return {...state,  newIngredient:{ingredient:null, error:null, loading: false}}


        case DELETE_INGREDIENT:
            return {...state, deletedIngredient: {...state.deletedIngredient, loading: true}}
        case DELETE_INGREDIENT_SUCCESS:
            return {...state, deletedIngredient: {ingredient:action.payload, error:null, loading: false}}
        case DELETE_INGREDIENT_FAILURE:
            error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            return {...state, deletedIngredient: {ingredient:null, error:error, loading: false}}
        case RESET_DELETED_INGREDIENT:
            return {...state,  deletedIngredient:{ingredient:null, error:null, loading: false}}

        case VALIDATE_INGREDIENT_FIELDS:
            return {...state, newIngredient:{...state.newIngredient, error: null, loading: true}}
        case VALIDATE_INGREDIENT_FIELDS_SUCCESS:
            return {...state, newIngredient:{...state.newIngredient, error: null, loading: false}}
        case VALIDATE_INGREDIENT_FIELDS_FAILURE:
            let result = action.payload;
            if(!result) {
                error = {message: action.payload.message};
            } else {
                error = {title: result.title, categories: result.categories, description: result.description};
            }
            return {...state, newIngredient:{...state.newIngredient, error: error, loading: false}}
        case RESET_INGREDIENT_FIELDS:
            return {...state, newIngredient:{...state.newIngredient, error: null, loading: null}}
        default:
            return state;
    }
}
