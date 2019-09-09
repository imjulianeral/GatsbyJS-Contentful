import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/Head';

export default function NotFound() {
    return (
        <Layout>
            <Head title="Page Not Found"/>
            <h1>Page Not Found</h1>
            <p><Link to="/">Head Home</Link></p>
        </Layout>
    )
}
