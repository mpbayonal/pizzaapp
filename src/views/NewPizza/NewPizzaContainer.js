import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { changeStatusIngredient } from '../../redux/actions/ingredientsActions';
import NewPizza from './NewPizza';


const mapStateToProps = (state) => {

    const { todos } = state
    console.log(state.mainReducer.Ingredients.ingredientsList.ingredients)
    return {

        ingredientsList: state.mainReducer.Ingredients.ingredientsList.ingredients


    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        changeStatusIngredient: (nombre) => dispatch(changeStatusIngredient(nombre))



    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPizza);
