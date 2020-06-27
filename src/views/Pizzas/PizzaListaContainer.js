import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { fetchPizzas } from '../../redux/actions/pizzaActions';
import PizzaLista from './PizzaLista';


const mapStateToProps = (state) => {


    return {
        reservasList: state.mainReducer


    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        fetchReservas: () => dispatch(fetchPizzas())



    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaLista);
