import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
// Styles
import headerStyles from './header.module.scss';

export default function Header() {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }  
            }
        }
    `);

    return (
        <header className={ headerStyles.header }>
            <h1>
                <Link className={ headerStyles.title } to={'/'}>{ data.site.siteMetadata.author }</Link>
            </h1>
            <nav>
                <ul className={ headerStyles.navList }>
                    <li>
                        <Link 
                            className={ headerStyles.navItem } 
                            activeClassName={ headerStyles.activeNavItem } 
                            to={'/'}>
                                Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={ headerStyles.navItem } 
                            activeClassName={ headerStyles.activeNavItem } 
                            to={'/Contact'}>
                                Contact
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={ headerStyles.navItem } 
                            activeClassName={ headerStyles.activeNavItem } 
                            to={'/About'}>
                                About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={ headerStyles.navItem } 
                            activeClassName={ headerStyles.activeNavItem } 
                            to={'/Blog'}>
                                Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
