import React from "react";
import { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import PizzasTableEditable from "./PizzasTableEditable";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";



export default function PizzaLista(props) {

  let reservasLista = []

  useEffect(() => {
    props.fetchReservas()



  }, []);

  const { reservas, loading, error } = props.reservasList;


  if(loading)
  {
    return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>Reservas</h4>
                <p className={classes.cardCategoryWhite}>
                  Ver todas las reservas por habitacion.
                </p>
              </CardHeader>
              <CardBody>

                <h4 className={classes.cardTitle}>Se estan cargando tus reservas...</h4>

              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
    );


  }
  else if(error != null){
    return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>Reservas</h4>
                <p className={classes.cardCategoryWhite}>
                  Ver todas las reservas por habitacion.
                </p>
              </CardHeader>
              <CardBody>

                <h4 className={classes.cardTitle}>Hubo un error cargando tus reservas. Error: {error.message}</h4>

              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
    );

  }
  else {


    let d = 0
    while(d < reservas.length)
    {

      let y = 0
      while(y < reservas[d].pHabitacion.length)
      {
        let reserva = { "id":reservas[d].id, "nombre_Cliente":reservas[d].pCliente.nombre, "idCliente": reservas[d].pCliente.id,
          'habitacion':reservas[d].pHabitacion[y].nombre,
          'habitacion_tipo':reservas[d].pHabitacion[y].tipo,
          'fecha_inicial':reservas[d].fechaInicio,
          'fechaFin':reservas[d].fechaFin


        };

        reservasLista.push(reserva)
        console.log(reservasLista)

      y=y+1;
      }

      d = d+1;
    }



    return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>Reservas</h4>
                <p className={classes.cardCategoryWhite}>
                  Ver todas las reservas por habitacion.
                </p>
              </CardHeader>
              <CardBody>

                <ReservasTableEditable
                    tableHead={[
                      {title: 'Id de la Reserva', field: 'id'},
                      {title: 'Nombre del Cliente', field: 'nombre_Cliente'},
                      {title: 'Id del Cliente', field: 'idCliente'},
                      {title: 'Habitacion', field: 'habitacion'},
                      {title: 'Tipo de Habitacion', field: 'habitacion_tipo'},
                      {title: 'Fecha Inicial', field: 'fecha_inicial', type: 'date'},
                      {title: 'Fecha Fin', field: 'fechaFin', type: 'date'},
                    ]}
                    tableData={reservasLista}
                    deleteReserva={props.deleteReservas}
                    //actualizar = {props.fetchReservas()}
                />

              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
    );
  }

}
