import React from "react";
import { useState, useEffect } from "react";


import PizzasTableEditable from "./PizzasTableEditable";


import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

export default function PizzaLista(props) {

  let reservasLista = []

  useEffect(() => {
    props.fetchReservas()



  }, []);

  const { reservas, loading, error } = props.reservasList;


  if(loading)
  {
    return (
        <>
          <div className="content">
            <Row>
              <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h3">Lista de Pizzas</CardTitle>
              </CardHeader>
              <CardBody>

                <CardTitle tag="h5">Hubo un error cargando la lista de pizzas</CardTitle>

              </CardBody>
            </Card>
              </Col>
            </Row>
          </div>
        </>
    );


  }
  else if(error != null){
    return (
        <>
          <div className="content">
            <Row>
              <Col md="12">
                <Card className="card-user">
                  <CardHeader>
                    <CardTitle tag="h3">Lista de Pizzas</CardTitle>
                  </CardHeader>
                  <CardBody>

                    <CardTitle tag="h5">Hubo un error cargando la lista de pizzas</CardTitle>

                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </>
    );

  }
  else {


    let d = 0
    while(d < 0)
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
        <>
          <div className="content">
            <Row>
              <Col md="12">
                <Card className="card-user">
                  <CardHeader>
                    <CardTitle tag="h3">Lista de Pizzas</CardTitle>
                  </CardHeader>
                  <CardBody>

                <PizzasTableEditable
                    tableHead={[
                      {title: 'Nombre de la Pizza', field: 'id'},
                      {title: 'Cliente', field: 'nombre_Cliente'},

                      {title: 'telefono', field: 'telefono'},
                      {title: 'Precio', field: 'precio', type: 'number'},

                      {title: 'Fecha', field: 'fecha', type: 'date'},
                    ]}
                    tableData={reservasLista}

                />

                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </>
    );
  }

}
