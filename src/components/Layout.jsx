import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
// Styles
import '../styles/index.scss';
import layoutStyles from './layout.module.scss';

export default function Layout({ children }) {
    return (
        <Fragment>
            <div className={ layoutStyles.container }>
                <div className={ layoutStyles.content }>
                    <Header/>
                    { children }
                </div>
                <Footer/>
            </div>
        </Fragment>
    )
}
