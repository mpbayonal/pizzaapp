import axios from 'axios';

//Pizza list
export const FETCH_PIZZAS = 'FETCH_PIZZAS';
export const FETCH_PIZZAS_SUCCESS = 'FETCH_PIZZAS_SUCCESS';
export const FETCH_PIZZAS_FAILURE = 'FETCH_PIZZAS_FAILURE';
export const RESET_PIZZAS = 'RESET_PIZZAS';

//Create new reserva
export const CREATE_PIZZA = 'CREATE_PIZZA';
export const CREATE_PIZZA_SUCCESS = 'CREATE_PIZZA_SUCCESS';
export const CREATE_PIZZA_FAILURE = 'CREATE_PIZZA_FAILURE';
export const RESET_NEW_PIZZA = 'RESET_NEW_PIZZA';

//Validate reserva fields like Title, Categries on the server
export const VALIDATE_PIZZA_FIELDS = 'VALIDATE_PIZZA_FIELDS';
export const VALIDATE_PIZZA_FIELDS_SUCCESS = 'VALIDATE_PIZZA_FIELDS_SUCCESS';
export const VALIDATE_PIZZA_FIELDS_FAILURE = 'VALIDATE_PIZZA_FIELDS_FAILURE';
export const RESET_PIZZA_FIELDS = 'RESET_PIZZA_FIELDS';

//Fetch reserva
export const FETCH_PIZZA = 'FETCH_PIZZA';
export const FETCH_PIZZA_SUCCESS = 'FETCH_PIZZA_SUCCESS';
export const FETCH_PIZZA_FAILURE = 'FETCH_PIZZA_FAILURE';
export const RESET_ACTIVE_PIZZA = 'RESET_ACTIVE_PIZZA';

//Delete reserva
export const DELETE_PIZZA = 'DELETE_PIZZA';
export const DELETE_PIZZA_SUCCESS = 'DELETE_PIZZA_SUCCESS';
export const DELETE_PIZZA_FAILURE = 'DELETE_PIZZA_FAILURE';
export const RESET_DELETED_PIZZA = 'RESET_DELETED_PIZZA';



const ROOT_URL = 'http://127.0.0.1:8000';
export function fetchPizzasStarted() {
  return {
    type: FETCH_PIZZAS
  };
}


export const fetchPizzas = () => {
  return dispatch => {
    dispatch(fetchPizzasStarted());

    axios
        .get(`${ROOT_URL}/reservas/`)
        .then(res => {
           dispatch(fetchPizzasSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchPizzasFailure(err));
        });
  };
};

export function fetchPizzasSuccess(reservas) {
  return {
    type: FETCH_PIZZAS_SUCCESS,
    payload: reservas
  };
}

export function fetchPizzasFailure(error) {
  return {
    type: FETCH_PIZZAS_FAILURE,
    payload: error
  };
}

export function validatePizzaFields(props) {
  //note: we cant have /reservas/validateFields because it'll match /reservas/:id path!
  const request = axios.reserva(`${ROOT_URL}/reservas/validate/fields`, props);

  return {
    type: VALIDATE_PIZZA_FIELDS,
    payload: request
  };
}

export function validatePizzaFieldsSuccess() {
  return {
    type: VALIDATE_PIZZA_FIELDS_SUCCESS
  };
}

export function validatePizzaFieldsFailure(error) {
  return {
    type: VALIDATE_PIZZA_FIELDS_FAILURE,
    payload: error
  };
}

export function resetPizzaFields() {
  return {
    type: RESET_PIZZA_FIELDS
  }
}
;


export function createPizza(props, tokenFromStorage) {
  const request = axios({
    method: 'reserva',
    data: props,
    url: `${ROOT_URL}/reservas`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });

  return {
    type: CREATE_PIZZA,
    payload: request
  };
}

export function createPizzaSuccess(newPizza) {
  return {
    type: CREATE_PIZZA_SUCCESS,
    payload: newPizza
  };
}

export function createPizzaFailure(error) {
  return {
    type: CREATE_PIZZA_FAILURE,
    payload: error
  };
}

export function resetNewPizza() {
  return {
    type: RESET_NEW_PIZZA
  }
}
;

export function resetDeletedPizza() {
  return {
    type: RESET_DELETED_PIZZA
  }
}
;

export function fetchPizza(id) {
  const request = axios.get(`${ROOT_URL}/reservas/${id}`);

  return {
    type: FETCH_PIZZA,
    payload: request
  };
}


export function fetchPizzaSuccess(activePizza) {
  return {
    type: FETCH_PIZZA_SUCCESS,
    payload: activePizza
  };
}

export function fetchPizzaFailure(error) {
  return {
    type: FETCH_PIZZA_FAILURE,
    payload: error
  };
}

export function resetActivePizza() {
  return {
    type: RESET_ACTIVE_PIZZA
  }
}

export const deletePizzas = (id) => {
  return dispatch => {
    dispatch(deletePizzaSarted());

    axios
        .delete(`${ROOT_URL}/reserva/${id}/`)
        .then(res => {
          dispatch(deletePizzaSuccess(res));
        })
        .catch(err => {
          dispatch(deletePizzaFailure(err));
        });
  };
};

export function deletePizzaSarted() {
  return {
    type: DELETE_PIZZA
  };
}

export function deletePizzaSuccess(deletedPizza) {
  return {
    type: DELETE_PIZZA_SUCCESS,
    payload: deletedPizza
  };
}

export function deletePizzaFailure(response) {
  return {
    type: DELETE_PIZZA_FAILURE,
    payload: response
  };
}
