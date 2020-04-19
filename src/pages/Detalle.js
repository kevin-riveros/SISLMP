import React, { Component } from 'react'

import Layout from '../components/Layout'
import BagIcon from "../assets/Bag.svg";
import FabricanteIcon from "../assets/Fabricante.svg";
import LoteIcon from "../assets/Lote.svg";
import ShipmentIcon from "../assets/Shipment.svg";

const IMG_DETALLE = "https://i.ytimg.com/vi/2vcFLUnhG3w/maxresdefault.jpg"
export default class Detalle extends Component {
    state={
        logistica:[
            {
                tipo: "Farmacia:",
                nombre: "INCAFARMA S.A.C",
                icon: BagIcon
            },
            {
                tipo: "Distribuidor:",
                nombre: "P&G Distribuidores",
                icon: ShipmentIcon
            },
            {
                tipo: "Fabricante:",
                nombre: "Laboratorios GENFAR",
                icon: FabricanteIcon
            },
            {
                tipo: "Lote:",
                nombre: "L000045-12M3",
                icon: LoteIcon
            },
        ],
        detalles:[
            {
                title: "Formas farmacéuticas",
                description: "- Suspensión y granulado efervecente para suspensión oral"
            },
            {
                title: "Principios activos",
                description: "- Brivio cholerae biotipo Azy"
            },
            {
                title: "Vías de administración",
                description: "- Vía oral"
            },
            {
                title: "Características",
                description: "- Con receta"
            },
        ]
    }
    componentDidMount(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    renderDetalle( item ){
        const{ title, description } = item;
        return(
            <React.Fragment>
                <dt style={{fontSize: 14}}>{title}</dt>
                <dd style={{fontSize: 12, color: "#717171"}}>{description}</dd>
            </React.Fragment>
        )
    }
    renderItem( item, index ) {
        const { logistica } = this.state;
        const{ tipo, nombre, icon } = item;
        return( 
            <div>
                <p style={{fontSize: 14}}>
                    <img className="mr5" src={icon} alt="icon"/> <b>{ tipo }</b> { nombre }
                </p>
                {
                     logistica.length - 1 > index ? 
                    <div style={{backgroundColor: "#262F56", width: 2, height: 20,margin: "0 0 10px 12px"}}/> : null
                }
            </div>
        )
    }
    render() {
        const { logistica, detalles } = this.state;
        return (
            <Layout { ...this.props }>
                <div>
                    <br />
                    <h5>DETALLE DEL MEDICAMENTO</h5>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="border rounded p-3 mt-4" style={{ height: 180}}>
                                <img
                                    src={ IMG_DETALLE }
                                    alt="img"
                                    style={{
                                        width: "100%", objectFit: "contain", height: "100%"
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="border rounded pb-0 mt-4" style={{padding: 20, height: 180}}>
                                <h5><b>DUKORAL</b></h5>
                                <p><b>Nº de registro: </b>P0000012-QW12</p>
                                <p className="text-success">Autorizado (12/09/2019)</p>
                                <p><b>Estado: </b>Comercializado</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="border rounded mt-4" style={{padding: 20}}>
                                <h5><b>Detalle del medicamento</b></h5>
                                <br />
                                <dl>
                                    {
                                        detalles.map( item => this.renderDetalle( item ))
                                    }
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="border rounded pb-0 mt-4" style={{padding: 20}}>
                                <h5><b>Detalle logístico</b></h5>
                                <br />
                                {
                                     logistica.map( ( item, i ) => this.renderItem( item, i ) )
                                }
                            </div>
                        </div>
                    </div>
                    <br /><br /><br /><br />
                </div>
            </Layout>
        )
    }
}
