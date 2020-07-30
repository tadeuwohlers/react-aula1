import React, { Component } from 'react';

class Contador extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        };

        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }
    
    aumentar(){        
        let state = this.state;
        state.contador += 1;
        this.setState(state)
    }

    diminuir(){        
        let state = this.state;
        state.contador -= 1;
        this.setState(state)
    }

    render() {
        return(
        <div>
            <button onClick={this.diminuir}>-</button>
                {this.state.contador}
            <button onClick={this.aumentar}>+</button>
        </div>        
        );
    }
}

export default Contador;