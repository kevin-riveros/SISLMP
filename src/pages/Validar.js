import React, { Component } from 'react'

import Layout from '../components/Layout'
import { Table } from 'reactstrap'
import "../styles/button.scss"

export default class Validar extends Component {
    state={
        items:[
            {
                name: "Dukoral",
                lote: "24NF34-000023G",
                count: 102,
                ruc: "201034548"
            },
            {
                name: "Panadol",
                lote: "24NF34-000023G",
                count: 99,
                ruc: "201034548"
            },
            {
                name: "Paracetamol",
                lote: "24NF34-000023G",
                count: 10,
                ruc: "201034548"
            },
            {
                name: "Panadol mas fuerte",
                lote: "24NF34-000023G",
                count: 120,
                ruc: "201034548"
            },
        ]
    }
    componentDidMount(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    onAccept(){
        alert("Se aceptó el medicamento")
    }
    onDecline(){
        alert("Se rechazó el medicamento")
    }
    
    render() {
        const { items } = this.state;
        return (
            <Layout { ...this.props }>
                <div className="container">
                    <br />
                    <h5>Validar transacciones</h5>
                    <br />

                    <Table hover responsive>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Nombre del medicamento</th>
                            <th>Lote</th>
                            <th>Cantidad</th>
                            <th>Ruc</th>
                            <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map( ( item, index ) => (
                                    <tr keY={`item-${item.name}`}>
                                        <th scope="row">{index}</th>
                                        <td>{item.name}</td>
                                        <td>{item.lote}</td>
                                        <td>{item.count}</td>
                                        <td>{item.ruc}</td>
                                        <td>
                                            <button
                                                className="btn btn-blue"
                                                style={{marginRight:10}}
                                                onClick={ () => this.onAccept() }
                                            >
                                                Aceptar
                                            </button>
                                            <button
                                                className="btn btn-red"
                                                onClick={ () => this.onDecline() }
                                            >
                                                Rechazar
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        </Table>
                </div>
            </Layout>
        )
    }
}
