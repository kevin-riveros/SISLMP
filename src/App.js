import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Consulta from './pages/Consulta';
import Validar from './pages/Validar';
import GestionarMedicamentos from './pages/GMedicamentosRegistrar';
import GestionarMedicamentosBuscar from './pages/GMedicamentosBuscar';
import GUsuariosBuscar from './pages/GUsuariosBuscar';
import GUsuariosRegistrar from './pages/GUsuariosRegistrar';
import Detalle from './pages/Detalle';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login}  />
          <Route path="/inicio" component={Home} />
          <Route path="/consultar" component={Consulta} />
          <Route path="/transacciones" component={Validar} />
          <Route path="/medicamentos/buscar" component={GestionarMedicamentosBuscar} />
          <Route path="/medicamentos/registrar" component={GestionarMedicamentos} />


          <Route path="/usuarios/buscar" component={GUsuariosBuscar} />
          <Route path="/usuarios/agregar" component={GUsuariosRegistrar} />
          <Route path="/detalle/:id" component={Detalle} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
