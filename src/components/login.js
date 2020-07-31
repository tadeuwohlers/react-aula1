import React, { Component } from 'react';

class Login extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            status: true
        };

        //this.sair = this.sair.bind(this);
        //this.entrar = this.entrar.bind(this);
    }    

    sair() {
        this.setState({status: false});
    }

    entrar() {
        this.setState({status: true});
    }

    render() {
        return(
            <div>

                {this.state.status ?
                    <div>
                        <h1>Logado</h1>
                        <button onClick={ () => this.sair()}>Sair</button>
                    </div>
                    :
                    <div>
                        <h1>Não Logado</h1>
                        <button onClick={ () => this.entrar()}>Entrar</button>
                    </div>
                }

            </div>
        );
    }
}

export default Login;