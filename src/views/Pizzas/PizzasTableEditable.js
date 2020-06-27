import React, {useEffect} from "react";
import PropTypes from "prop-types";
// @material-ui/core components

import MaterialTable from 'material-table';

// core components
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};



export default function PizzasTableEditable(props) {
    const { tableHead, tableData } = props
    const [state, setState] = React.useState({
        columns: tableHead,
        data: tableData,
    });


    return (
        <MaterialTable
            icons={tableIcons}
            title=""
            columns={state.columns}
            data={state.data}
            localization={{
                grouping : { placeholder : "Arrastra AQUI el campo que quieres agrupar"},

                header: {actions : "Opciones"},

                toolbar : {searchTooltip : "Buscar",
                    searchPlaceholder : "Buscar",
                    nRowsSelected : "{0} elemento(s) seleccionado"},
                body:{
                    emptyDataSourceMessage: "No hay pizzas",

                    addTooltip: "Agregar",
                    deleteTooltip: "Borrar",
                    editTooltip: "Editar",

                    editRow:{
                        deleteText: "Esta seguro de borrar esta pizza",
                        cancelTooltip: "Cancelar",
                        saveTooltip: "Aceptar"
                    },
                    filterRow:{
                        filterTooltip: "Filtrar"

                    }

                }
            }}
            options={{
                filtering: true ,
                sorting: true ,
                selection: true,
                grouping: true
            }}
            actions={[
                {
                    tooltip: 'Borrar las reservas seleccionadas',
                    icon: 'delete',
                    onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
                }
            ]}




        />
    );
}

PizzasTableEditable.defaultProps = {
    tableHeaderColor: "gray"
};

PizzasTableEditable.propTypes = {
    tableHead: PropTypes.arrayOf(PropTypes.string),
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    deleteReserva: PropTypes.func,
    edit: PropTypes.func,
    actualizar : PropTypes.func
};
