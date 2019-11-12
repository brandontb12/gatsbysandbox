import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Industry = ({data}) => {
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
  query IndustryQuery {
    dataYaml(page: { eq: "industry" }) {
      callout {
        tag
      }
    }
  }
`;

export default Industry;