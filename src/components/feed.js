import React, { Component } from 'react';

class Feed extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            feed:[
                {id: 1, username: 'tadeuwohlers', curtidas: 10, comentarios: 20},
                {id: 2, username: 'fran', curtidas: 23, comentarios: 89},
                {id: 3, username: 'thais', curtidas: 31, comentarios: 200}
            ]
        };

    }

    render() {
        return(
            <div>
                {this.state.feed.map((item) => {
                    return(
                        <div key={item.id}>
                            <h3>{item.username}</h3>
                            <a>{item.curtidas} curtidas / {item.comentarios} comentários</a>
                        </div>
                    );
                })}                
            </div>
        );
    }
}

export default Feed;