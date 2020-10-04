import React from 'react';
import logo from '../logo.svg';
import ItemList from './ItemList';
import '../styles/css/index.css';

class TopNav extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  static async getInitialProps({ req }) {
    let pageProps = {};
    return { pageProps };
  }
  render(){
    return (
      <>
        <header className="navbar">
          <div className="Global-menu navbar-brand">
            <a className="navbar-item" href="https://github.com">
              <img src={logo} className="App-brand" alt="logotipo" />
            </a>
            <ItemList itemRefName="github.com" />
            <a className="navbar-item" href="https://github.com">Inicio</a>
            <a className="navbar-item" href="https://github.com">Tienda</a>
            <a className="navbar-item" href="https://github.com">Acerca de</a>
            <a className="Shop-icon navbar-item" href="https://github.com">
              <span class="icon">
                <i className="shoppingcart"></i>
              </span>
            </a>
          </div>
        </header>
        <div className="Local-menu navbar-brand">
            <a className="navbar-item" href="https://github.com">
              <img src={logo} className="App-brand" alt="logotipo" />
            </a>
            <a className="navbar-item" href="https://github.com">Inicio</a>
            <a className="navbar-item" href="https://github.com">Tienda</a>
            <a className="navbar-item" href="https://github.com">Acerca de</a>
            <a className="Shop-icon navbar-item" href="https://github.com">
              <span class="icon">
                <i className="shoppingcart"></i>
              </span>
            </a>
          </div>
      </>
    );
  }
}

export default TopNav;
