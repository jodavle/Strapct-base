import React, { Component } from 'react';

class ItemList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url,
            name: this.props.name,
        };
    }
      static async getInitialProps({ req }) {
        let pageProps = {};
        return { pageProps };
    }
    render(){
        return (
            <>
                <a className="navbar-item" href={this.state.url}>{this.state.name}</a>
            </>
        );
    }
};
export default ItemList;
