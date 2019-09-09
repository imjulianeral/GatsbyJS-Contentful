import React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery, Link } from 'gatsby';
import blogStyles from './blog.module.scss';
import Head from '../components/Head';

export default function Blog() {

    // const blogsMD = useStaticQuery(graphql`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     frontmatter {
    //                         title
    //                         date
    //                     }
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `);

    // const { allMarkdownRemark: { edges } } = blogsMD;

    const contentfulBlogs = useStaticQuery(graphql`
        query {
            allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC }	) {
                edges {
                    node {
                        title
                        slug
                        publishedDate (formatString: "D/MMMM/YYYY")
                    }
                }
            }
        }
    `);

    const { allContentfulBlogPost: { edges } } = contentfulBlogs;

    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>
            <ol className={ blogStyles.posts }>
                { edges.map(({ node: { title, slug, publishedDate } }) => (
                    <li key={ publishedDate } className={ blogStyles.post }>
                        <Link to={`/blog/${slug}`}>
                            <h2>{ title }</h2>
                            <p>{ publishedDate }</p>
                        </Link>                    
                    </li>
                )) }
            </ol>
        </Layout>
    )
}
