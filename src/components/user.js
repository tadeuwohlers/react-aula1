import React, { Component } from 'react';

class User extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: 'teste@teste.com',
            password: '123321'
        };

        this.cadastrar = this.cadastrar.bind(this);
    }    

    cadastrar(e) {
        const {nome, email, senha} = this.state;
        
        alert(`${nome}`);

        e.preventDefault();
    }

    render() {
        return(
            <div>
                <h1>Novo Usuário</h1>

                <form onSubmit={this.cadastrar}>
                    <label>Nome</label>
                    <input type="text" value={this.state.nome} onChange={ (e) => this.setState({nome: e.target.value})} /><br/>

                    <label>E-mail</label>
                    <input type="email" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value})} /><br/>

                    <label>Senha</label>
                    <input type="password" value={this.state.password} onChange={ (e) => this.setState({password: e.target.value})} /><br/>

                    <button type="submit">Cadastrar</button>
                </form>

            </div>
        );
    }
}

export default User;