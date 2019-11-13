import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import cx from 'classnames';
import Img from 'gatsby-image';
import { navigation } from 'uswds_components';
import UswdsComponent from './uswds_component';

const ROOT_CLASS = 'usa-header';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  extended: PropTypes.bool,
  mega: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  extended: false,
  mega: false,
};

const propsToClasses = props => ({
  [ROOT_CLASS]: true,
  'usa-header--basic': !props.extended,
  'usa-header--basic-megamenu': props.mega && !props.extended,
  'usa-header--extended': props.extended,
});

const getHeaderImage = () => {
  const { header } = useStaticQuery(
    graphql`
      query {
        header: file(base: { eq: "header.png" }) {
          childImageSharp {
            fluid(maxHeight:100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return header
}

const Header = ({ className, children, ...props }) => {
  const header_img = getHeaderImage();
  const render = ref => (
    <header
      className={cx(propsToClasses(props), className)}
      role="banner"
      ref={ref}
    >
    
      <div className="usa-navbar">
        <Img
          fluid={header_img.childImageSharp.fluid}
          fadeIn={false}
        />
        <div className="usa-logo" id="extended-logo">
          <em className="usa-logo__text">
            <Link to="/" title="Home" aria-label="Home">
              {props.title}
            </Link>
          </em>
        </div>
        <button className="usa-menu-btn">Menu</button>
      </div>
      {children}
    </header>
  );

  return <UswdsComponent uswdsComponent={navigation} render={render} />;
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
