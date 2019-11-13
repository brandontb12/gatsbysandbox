import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import logo from '../images/logo-trans.png';
import close from 'uswds_images/close.svg';
import {
  Accordion,
  AccordionButton,
  AccordionContent,
  Navigation,
  Header as UswdsHeader,
} from 'uswds-react';

var titleStyle = {
  color: "#0076d6",
  fontSize: "350%",
  textAlign: "center",
  alignSelf: "right",
  marginTop: "-2rem",
  marginBottom: "0rem",
  marginRight: "30rem",
  fontFamily: "Sans Sarif"
}

var linkStyle = {
  color: "#0076d6",
  fontFamily: "Sans Sarif"
}

const propTypes = {
  title: PropTypes.string.isRequired,
};

const Header = ({ title, header }) => (
  <UswdsHeader extended>
    <Navigation>
      <div className="usa-nav__inner">
        <button className="usa-nav__close">
          <img src={close} alt="close" />
        </button>
        <Accordion className="usa-nav__primary" tag="ul">
          {header.navigation.map((navGroup, idx) => (
            <li key={idx} className="usa-nav__primary-item">
              {navGroup.items.length > 1 ? (
                <React.Fragment>
                  <AccordionButton
                    className={`usa-nav__link ${idx === 0 ? 'usa-current' : ''}`}
                    controls={`extended-nav-section-${idx}`}
                  >
                    {/* <span>{navGroup.title}</span> */}
                  </AccordionButton>
                  <AccordionContent
                    id={`extended-nav-section-${idx}`}
                    tag="ul"
                    className="usa-nav__submenu"
                  >
                    {navGroup.items.map((navItem, idx) => (
                      <li key={idx} className="usa-nav__submenu-item">
                        <Link to={navItem.link}>{navItem.text}</Link>
                      </li>
                    ))}
                  </AccordionContent>
                </React.Fragment>
              ) : (
                <Link className="usa-nav__link" to={navGroup.items[0].link}>
                  <span style={linkStyle}>{navGroup.items[0].text}</span>
                </Link>
              )
              }
            </li>
          ))}
        </Accordion>
        <div className="usa-nav__secondary">
          
        </div>
      </div>
    </Navigation>
  </UswdsHeader>
);

Header.propTypes = propTypes;


export default Header;