import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/css/index.css';

class ItemList extends React.Component{

    render() {
        return (
            <span>
                <a href={this.props.ref}>{this.props.name}</a>
            </span>
        );
    }
}

export default ItemList;