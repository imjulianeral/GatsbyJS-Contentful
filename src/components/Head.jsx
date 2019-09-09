import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function Head({ title }) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);

    const { site: { siteMetadata: { author } } } = data;

    return (
        <Helmet title={ `${author} | ${title}` }/>
    )
}
