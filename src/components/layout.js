import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Banner, SkipNav } from 'uswds-react';
import './layout.css';
import Header from './header';

const mainContent = 'main-content';

var colorBackground = {
  backgroundColor: "#162e51"
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            header {
              navigation {
                items {
                  text
                  link
                }
              }
              secondaryLinks {
                text
                link
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <SkipNav skipsTo={mainContent} />
        <Banner />
        <div className="usa-overlay" />
        <div style={colorBackground}>
          <Header {...data.site.siteMetadata} />
        </div>
        <main id={mainContent}>{children}</main>
      </div>
    )}
  />
);

export default Layout;
