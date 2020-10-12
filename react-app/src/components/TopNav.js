import React from 'react';
import ItemList from './ItemList';
import brandLogo from '../assets/logomj.svg';
import '../styles/css/index.css';

class TopNav extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    	logo: this.props.logo
    };
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
	    <div className="navbar-brand">
	            <a className="navbar-item" href="https://github.com">
        	      <img src={this.props.logo} className="appbrand" alt="logotipo" />
	            </a>
		    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
		          <span aria-hidden="true"></span>
		          <span aria-hidden="true"></span>
	        	  <span aria-hidden="true"></span>
	     	    </a>
	    </div>
	    <div id="navMenu" className="navbar-menu">
	        <div className="navbar-start">
            <ItemList url="github.com" name="github" />
            <a className="navbar-item" href="https://github.com">Inicio</a>
            <a className="navbar-item" href="https://github.com">Tienda</a>
            <a className="navbar-item" href="https://github.com">Acerca de</a>
            <a className="Shop-icon navbar-item" href="https://github.com">
              <span class="icon">
                <i className="shoppingcart"></i>
              </span>
            </a>
		</div>
	    </div>
          </div>
        </header>
        <div className="Local-menu navbar-brand">
            <ItemList url="lol" name="Inicio" />
            <ItemList url="github.com" name="Tienda" />
            <ItemList url="https://github.com" name="Acerca de" />
            <a className="Shop-icon navbar-item" href="https://github.com">
              <span class="icon">
                <i className="fa fa-shoppingcart"></i>
              </span>
            </a>
          </div>
      </>
    );
  }
}

export default TopNav;
