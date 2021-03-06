import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Test = ({data}) => {
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
  query TestQuery {
    dataYaml(page: { eq: "test" }) {
      callout {
        tag
      }
    }
  }
`;

export default Test;