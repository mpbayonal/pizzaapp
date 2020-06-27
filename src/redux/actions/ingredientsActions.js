import axios from 'axios';

//Ingredient list
export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS';
export const FETCH_INGREDIENTS_SUCCESS = 'FETCH_INGREDIENTS_SUCCESS';
export const FETCH_INGREDIENTS_FAILURE = 'FETCH_INGREDIENTS_FAILURE';
export const RESET_INGREDIENTS = 'RESET_INGREDIENTS';

//Create new reserva
export const CREATE_INGREDIENT = 'CREATE_INGREDIENT';
export const CREATE_INGREDIENT_SUCCESS = 'CREATE_INGREDIENT_SUCCESS';
export const CREATE_INGREDIENT_FAILURE = 'CREATE_INGREDIENT_FAILURE';
export const RESET_NEW_INGREDIENT = 'RESET_NEW_INGREDIENT';

//Validate reserva fields like Title, Categries on the server
export const UPDATE_INGREDIENT_FIELDS = 'VALIDATE_INGREDIENT_FIELDS';
export const UPDATE_INGREDIENT_FIELDS_SUCCESS = 'VALIDATE_INGREDIENT_FIELDS_SUCCESS';
export const UPDATE_INGREDIENT_FIELDS_FAILURE = 'VALIDATE_INGREDIENT_FIELDS_FAILURE';
export const RESET_INGREDIENT_FIELDS = 'RESET_INGREDIENT_FIELDS';

//Fetch reserva
export const FETCH_INGREDIENT = 'FETCH_INGREDIENT';
export const FETCH_INGREDIENT_SUCCESS = 'FETCH_INGREDIENT_SUCCESS';
export const FETCH_INGREDIENT_FAILURE = 'FETCH_INGREDIENT_FAILURE';
export const RESET_ACTIVE_INGREDIENT = 'RESET_ACTIVE_INGREDIENT';

//Delete reserva
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const DELETE_INGREDIENT_SUCCESS = 'DELETE_INGREDIENT_SUCCESS';
export const DELETE_INGREDIENT_FAILURE = 'DELETE_INGREDIENT_FAILURE';
export const RESET_DELETED_INGREDIENT = 'RESET_DELETED_INGREDIENT';



const ROOT_URL = 'http://127.0.0.1:8000';
export function fetchIngredientsStarted() {
  return {
    type: FETCH_INGREDIENTS
  };
}


export const fetchIngredients = () => {
  return dispatch => {
    dispatch(fetchIngredientsStarted());

    axios
        .get(`${ROOT_URL}/reservas/`)
        .then(res => {
           dispatch(fetchIngredientsSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchIngredientsFailure(err));
        });
  };
};

export function fetchIngredientsSuccess(reservas) {
  return {
    type: FETCH_INGREDIENTS_SUCCESS,
    payload: reservas
  };
}

export function fetchIngredientsFailure(error) {
  return {
    type: FETCH_INGREDIENTS_FAILURE,
    payload: error
  };
}


export function resetIngredientFields() {
  return {
    type: RESET_INGREDIENT_FIELDS
  }
}
;


export function createIngredient(props, tokenFromStorage) {
  const request = axios({
    method: 'reserva',
    data: props,
    url: `${ROOT_URL}/reservas`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });

  return {
    type: CREATE_INGREDIENT,
    payload: request
  };
}

export function createIngredientSuccess(newIngredient) {
  return {
    type: CREATE_INGREDIENT_SUCCESS,
    payload: newIngredient
  };
}

export function createIngredientFailure(error) {
  return {
    type: CREATE_INGREDIENT_FAILURE,
    payload: error
  };
}

export function resetNewIngredient() {
  return {
    type: RESET_NEW_INGREDIENT
  }
}
;

export function resetDeletedIngredient() {
  return {
    type: RESET_DELETED_INGREDIENT
  }
}
;

export function changeStatusIngredient(id) {
  const request = axios.get(`${ROOT_URL}/reservas/${id}`);

  return {
    type: UPDATE_INGREDIENT_FIELDS,
    payload: request
  };
}


export function changeStatusIngredientSuccess(activeIngredient) {
  return {
    type: UPDATE_INGREDIENT_FIELDS_SUCCESS,
    payload: activeIngredient
  };
}

export function changeStatusIngredientFailure(error) {
  return {
    type: UPDATE_INGREDIENT_FIELDS_FAILURE,
    payload: error
  };
}

export function resetActiveIngredient() {
  return {
    type: RESET_ACTIVE_INGREDIENT
  }
}

export const deleteIngredients = (id) => {
  return dispatch => {
    dispatch(deleteIngredientSarted());

    axios
        .delete(`${ROOT_URL}/reserva/${id}/`)
        .then(res => {
          dispatch(deleteIngredientSuccess(res));
        })
        .catch(err => {
          dispatch(deleteIngredientFailure(err));
        });
  };
};

export function deleteIngredientSarted() {
  return {
    type: DELETE_INGREDIENT
  };
}

export function deleteIngredientSuccess(deletedIngredient) {
  return {
    type: DELETE_INGREDIENT_SUCCESS,
    payload: deletedIngredient
  };
}

export function deleteIngredientFailure(response) {
  return {
    type: DELETE_INGREDIENT_FAILURE,
    payload: response
  };
}
