import React, { Component } from 'react'

import Layout from '../components/Layout'

export default class GestionarUsuarios extends Component {
    render() {
        return (
            <Layout { ...this.props }>
                <div>
                    <br />
                    <h5>Gestionar Usuarios</h5>
                
                </div>
            </Layout>
        )
    }
}
