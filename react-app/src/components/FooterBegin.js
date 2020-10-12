import React, { Component } from 'react';

class FooterBegin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ref: this.props.ref,
            name: this.props.name
        };
    }4
      static async getInitialProps({ req }) {
        let pageProps = {};
        return { pageProps };
    }
    render(){
        return (
        <>
            <footer class="footer Foot-Start">
                <div className="container ">
                    <div className="columns">
                        <div class="content has-text-centered column is-12">
                            <p>
                            <strong>Maria + Jose</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                            </p>
                        </div>
                    </div>
                    <div className="columns">
                        <div class="column is-4">
                            <p><strong>Whatsapp</strong><br />4444-4444</p>
                        </div>
                        <div class="column is-4">
                            <p><strong>Telefono</strong><br />4444-4444</p>
                        </div>
                        <div class="column is-4">
                            <p><strong>Email</strong><br />info@mariayjose.com</p>
                        </div>

                    </div>
                </div>
            </footer>
            <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <div className="columns">
                        <div class="column is-6">
                            <h1 class="title">
                                Hero title
                            </h1>
                        </div>
                        <div class="column has-text-right is-6">
                            <h1 class="title">
                                <span class="icon">
                                    <i class="fa fa-github"></i>
                                </span>
                            </h1>
                        </div>
                    </div>
                    <small class="subtitle">
                        Privacidad
                    </small>
                </div>
            </div>
            </section>
        </>
        );
    }
};
export default FooterBegin;
