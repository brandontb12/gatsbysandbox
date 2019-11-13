import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import chunk from 'lodash/fp/chunk';
import circle from 'uswds_images/circle-124.png';
import Layout from '../components/layout';

var linkStyle = {
  padding: "20px",
  fontFamily: "Sans Sarif"
}

var headerStyle = {
  color: "#0076d6",
  fontFamily: "Sans Sarif",
  fontSize: "300%"
}

var textStyle = {
  fontFamily: "Sans Sarif"
}

var boxStyle = {
  marginTop: "-.5rem",
  padding: ".2rem"
}

var calloutHeader = {
  fontSize: "150%"
}

var borderStyle = {
  border: "2px solid #0076d6"
}

var paragraphSize = {
  fontSize: "110%"
}

var horizontalLine = {
    backgroundColor: "#0076d6",
    width: "5rem",
    height: "2px",
    display: "compact",
    marginTop: "5.2rem"
}

var blockStyle = {
  display: "inline-block"
}

const Index = ({ data }) => {
  const { callout, media, section, tagline } = data.dataYaml;
  return (
    <Layout>
      <section className="usa-hero">
        <Img
          fluid={data.file.childImageSharp.fluid}
          className="usa-hero__image"
          fadeIn={false}
        />
        <div className="grid-container">
          <div className="usa-hero__callout">
            <h2 style={textStyle, boxStyle, calloutHeader} className="usa-hero__heading">{callout.title}</h2>
            <p style={textStyle} className="tablet:margin-top-1" >{callout.text}</p>
            <Link style={textStyle} className="usa-button" to={callout.cta.link}>
              {callout.cta.text}
            </Link>
          </div>
        </div>
      </section>

      <section className="grid-container usa-section">
        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-3">
            <h2 style={headerStyle} className="font-heading-xl margin-top-4 tablet:margin-bottom-0">{tagline.title}</h2>
          </div>
          <div style={horizontalLine} className="tablet:grid-col-1"></div>
          <div style={borderStyle} className="tablet:grid-col-8">
            {tagline.content.map((p, idx) => (
              <p style={textStyle, paragraphSize} key={idx}>{p}</p>
            ))}
          </div>
          <div className="tablet:grid-col-6 margin-top-5">
            <a style={linkStyle} className="usa-button" href="https://health.mil/Reference-Center/Fact-Sheets/2019/07/30/PEO-DHMS-Fact-Sheet">
              {"PEO DHMS Fact Sheet"}
            </a>
          </div>
          <div className="tablet:grid-col-6 margin-top-5">
            <a style={linkStyle} className="usa-button" href="https://health.mil/Reference-Center/Publications/2019/05/20/PEO-DHMS-Brochure">
              {"PEO DHMS Brochure"}
            </a>
          </div>
        </div>
      </section>

      <section className="usa-graphic-list usa-section usa-section--dark">
        <div className="grid-container">
          {chunk(2, media).map((pairs, idx) => (
            <div key={idx} className="usa-graphic-list__row grid-row grid-gap">
              {pairs.map(({ title, text }, idx) => (
                <div key={idx} className="usa-media-block tablet:grid-col">
                  <img
                    className="usa-media-block__img"
                    src={circle}
                    alt="circle"
                  />
                  <div className="usa-media-block__body">
                    <h3 style={textStyle} className="usa-graphic-list__heading">{title}</h3>
                    <p style={textStyle}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="usa-section">
        <div className="grid-container">
          <h2 style={headerStyle} className="font-heading-xl margin-y-0">{section.title}</h2>
          <p style={textStyle} className="usa-intro">{section.text}</p>
          <Link style={linkStyle} className="usa-button usa-button--big" to={section.cta.link}>
            {section.cta.text}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    file(base: { eq: "hero.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dataYaml(page: { eq: "index" }) {
      callout {
        title
        text
        cta {
          text
          link
        }
      }
      media {
        title
        text
      }
      section {
        title
        text
        cta {
          text
          link
        }
      }
      tagline {
        title
        content
      }
    }
  }
`;

export default Index;
