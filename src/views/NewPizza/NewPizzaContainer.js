import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { changeStatusIngredient } from '../../redux/actions/ingredientsActions';
import NewPizza from './NewPizza';


const mapStateToProps = (state) => {

    console.log(state.mainReducer)
    return {

        ingredientsList: state.mainReducer.Ingredients.ingredientsList


    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        changeStatusIngredient: (nombre) => dispatch(changeStatusIngredient(nombre))



    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPizza);
