import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Academia = ({data}) => {
    const { callout } = data.dataYaml;
    return (
        <Layout>
            <section>
                <p>{callout.tag}</p>
            </section>
        </Layout>
    )
}

export const query = graphql`
  query AcademiaQuery {
    dataYaml(page: { eq: "academia" }) {
      callout {
        tag
      }
    }
  }
`;

export default Academia;