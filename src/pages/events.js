import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Events = ({data}) => {
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
  query EventsQuery {
    dataYaml(page: { eq: "events" }) {
      callout {
        tag
      }
    }
  }
`;

export default Events;