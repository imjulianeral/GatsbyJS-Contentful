import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from "../components/Head";

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `;

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost ( slug: { eq: $slug }) {
      title
      publishedDate (formatString: "D/MMMM/YYYY")
      content {
        json
      }
    }
  }
`;

export default function blog({ data: { contentfulBlogPost: { title, publishedDate, content: { json } } } }) {
  
  const options = {
    renderNode: {
      "embedded-asset-block": ({ data: { target: { fields: { title, file } } } }) => {
        const src = file['en-US'].url;
        const alt = title['en-US'];

        return (
          <img src={ src } alt={ alt }/>
        )
      }
    }
  }

  console.log(options.renderNode);
  
  return (
    <Layout>
      <Head title={ title }/>
      <h1>{ title }</h1>
      <p>{ publishedDate }</p>
      { documentToReactComponents(json, options) }
    </Layout>
  )
}
