import {
    FETCH_INGREDIENTS, FETCH_INGREDIENTS_SUCCESS, FETCH_INGREDIENTS_FAILURE, RESET_INGREDIENTS,
    FETCH_INGREDIENT, FETCH_INGREDIENT_SUCCESS,  FETCH_INGREDIENT_FAILURE, RESET_ACTIVE_INGREDIENT,
    CREATE_INGREDIENT, CREATE_INGREDIENT_SUCCESS, CREATE_INGREDIENT_FAILURE, RESET_NEW_INGREDIENT,
    DELETE_INGREDIENT, DELETE_INGREDIENT_SUCCESS, DELETE_INGREDIENT_FAILURE, RESET_DELETED_INGREDIENT,
    UPDATE_INGREDIENT_FIELDS,UPDATE_INGREDIENT_FIELDS_SUCCESS, UPDATE_INGREDIENT_FIELDS_FAILURE, RESET_INGREDIENT_FIELDS
} from '../actions/ingredientsActions';


const INITIAL_STATE = { ingredientsList: {ingredients: [
            {
                "name": "Aceitunas",
                "image": 'aceitunas.png',
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Cebolla",
                "image": 'cebolla.jpg',
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Cereza",
                "image": 'cereza.jpg',
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Cereza",
                "image": 'cereza.jpg',
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Champiñones",
                "image": 'champinones.png',
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Ciruelas",
                "image": 'ciruela.png',
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Jalapeños",
                "image": 'jalapenos.png',
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Maiz",
                "image": 'maiz.jpg',
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Pepinillos",
                "image": 'pepinillos.png',
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Pimenton",
                "image": 'pimenton.png',
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Piña",
                "image": 'pina.jpeg',
                "price": 3000,
                "type": "ingrediente",
                "status": 0
            },
            {
                "name": "Queso Americano",
                "image": 'americano.jpg',
                "price": 3000,
                "type": "quesos",
                "status": 0
            },
            {
                "name": "Mozzarella",
                "image": 'mozzarella.jpg',
                "price": 3000,
                "type": "quesos",
                "status": 0
            },
            {
                "name": "Queso Azul",
                "image": 'quesoAzul.png',
                "price": 3000,
                "type": "quesos",
                "status": 0
            },
            {
                "name": "Salsa de Tomate",
                "image": 'salasatomate.png',
                "price": 3000,
                "type": "salsas",
                "status": 0
            },
            {
                "name": "Salsa BBQ",
                "image": 'salsabbq.png',
                "price": 3000,
                "type": "salsas",
                "status": 0
            },
            {
                "name": "Salsa Marinara",
                "image": 'salsamarinara.jpg',
                "price": 3000,
                "type": "salsas",
                "status": 0
            },
            {
                "name": "Tocineta",
                "image": 'tocineta.png',
                "price": 3000,
                "type": "carnes",
                "status": 0
            },
            {
                "name": "Carne",
                "image": 'carne.png',
                "price": 3000,
                "type": "carnes",
                "status": 0
            },
            {
                "name": "Chorizo",
                "image": 'chorizo.jpg',
                "price": 3000,
                "type": "carnes",
                "status": 0
            },
            {
                "name": "Jamon",
                "image": 'jamon.png',
                "price": 3000,
                "type": "carnes",
                "status": 0
            },
            {
                "name": "Pollo",
                "image": 'pollo.jpg',
                "price": 5000,
                "type": "carnes",
                "status": 0
            },
            {
                "name": "Peperoni",
                "image": 'peperoni.jpg',
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

        case UPDATE_INGREDIENT_FIELDS:

            const index = state.ingredientsList.ingredients.map((product, i) => {
                    if (product.name === action.payload.id) {
                        return product
                    } });


            console.log(state.ingredientsList.ingredients)
            if(index.status === 0 ){

                return { ...state, ingredients: [ ...state.ingredientsList.ingredients.filter(p => p !== index), { ...index, status: 1 } ] };

            }

                else {

                return { ...state, ingredients: [ ...state.ingredientsList.ingredients.filter(p => p !== index), { ...index, status: 0 } ] };
            }




            case UPDATE_INGREDIENT_FIELDS_SUCCESS:
            return {...state, newIngredient:{...state.newIngredient, error: null, loading: false}}
        case UPDATE_INGREDIENT_FIELDS_FAILURE:
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
