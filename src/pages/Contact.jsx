import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';

export default function Contact() {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact me</h1>
            <ul>
                <li>Email</li>
                <li>Phone</li>
                <li>GitHub</li>
            </ul>
        </Layout>
    )
}
