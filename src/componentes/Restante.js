import React, { Component } from 'react';
import { revisarPresupuesto } from '../helpers';
import PropTypes from 'prop-types';

class Restante extends Component {
    state = {  }
    render() { 
        const presupuesto = this.props.presupuesto;
        const restante = this.props.restante;

        return (  
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {this.props.restante}
            </div>
        );
    }
}

Restante.propTypes = {
    presupuesto: PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired
}
 
export default Restante;


