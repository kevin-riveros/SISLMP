import React, { Component } from 'react'

import Layout from '../components/Layout'

import "../styles/button.scss"
import "../styles/input.scss"

export default class Consulta extends Component {
    onSearch(){
        this.props.history.push("/detalle/dukoral")
    }
    render() {
        return (
            <Layout { ...this.props }>
                <div>
                    <br />
                    <h5>Consulta de medicamentos</h5>
                    <p>Ingrese el código único:</p>
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-6 col-xl-6">
                            <div className="d-flex align-items-center">
                                <input
                                    className="input-component"
                                    placeholder="Ejemplo: 234NT-121300001"
                                    style={{margin: 0}}
                                />
                                <button
                                    className="btn btn-blue"
                                    style={{marginLeft: 10}}
                                    onClick={ () => this.onSearch() }
                                >
                                    BUSCAR
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Layout>
        )
    }
}
