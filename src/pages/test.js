import React from 'react';
import { graphql } from 'gatsby';

const Test = ({data}) => {
    const {content} = data.dataYML;
    return (
        <section>
            <p>{content.tag}</p>
        </section>
    )
}

export const query = graphql`
  query TestQuery {
    dataYaml(page: { eq: "test" }) {
      content {
        tag
      }
    }
  }
`;

export default Test;