import React, { Component } from 'react';

class Login extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            status: false,
            email: 'teste@teste.com',
            password: '123321'
        };

        this.trocarEmail = this.trocarEmail.bind(this);
        this.trocarSenha = this.trocarSenha.bind(this);
    }    

    sair() {
        this.setState({status: false});
    }

    entrar() {
        this.setState({status: true});
    }

    trocarEmail(e) {
        let email = e.target.value;
        this.setState({email: email});
    }

    trocarSenha(e) {
        let password = e.target.value;
        this.setState({password: password});
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
                        <h1>Logar</h1>
                        E-mail: <input type="email" nome="email" value={this.state.email} onChange={this.trocarEmail}/><br/>
                        Senha: <input type="password" nome="password" value={this.state.password} onChange={this.trocarSenha}/><br/>
                        <button onClick={ () => this.entrar()}>Entrar</button>
                    </div>
                }

            </div>
        );
    }
}

export default Login;