import React, { Component } from 'react'

import "./Login.scss"
import "../styles/button.scss"
import "../styles/input.scss"

export default class Login extends Component {

    onLogin(){
        this.props.history.push("/inicio")
    }
    componentDidMount(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    render() {
        return (
            <div className="login-component">
                <div className="login-component__container">
                    <p>Bienvenidos al sistema de consulta de medicamentos</p>
                    <input
                        placeholder="Correo"
                        className="input-component"
                    />
                    <input
                        placeholder="Contraseña"
                        className="input-component"
                    />
                    <button
                        className="btn btn-blue"
                        style={{width: "100%"}}
                        onClick={ () => this.onLogin() }
                    >
                        INGRESAR
                    </button>
                </div>
            </div>
        )
    }
}
