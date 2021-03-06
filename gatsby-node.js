const path = require('path');

// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions;

//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md');
        
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         });
//     }
// }

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.jsx');

    // const resp = await graphql(`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `);

    const resp = await graphql(`
        query {
            allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC }) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    resp.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        });
    });
}