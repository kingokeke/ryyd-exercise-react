import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const StickyDivUK = styled.div`
    position: fixed;
    top: 0px;
    width: 100%;
  `;
  return (
    <>
      <header>
        <StickyDivUK
          data-uk-sticky="media: 960"
          className="uk-navbar-container tm-navbar-container uk-sticky uk-sticky-fixed"
        >
          <div className="uk-container uk-container-expand">
            <nav className="uk-navbar">
              <div className="uk-navbar-left">
                <Link to="/" className="uk-navbar-item uk-logo">
                  RYYD
                </Link>
              </div>
              <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                  <li>
                    <NavLink exact to="/" activeClassName="active-page">
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/drivers" activeClassName="active-page">
                      Drivers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/trips" activeClassName="active-page">
                      Trips
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </StickyDivUK>
      </header>
    </>
  );
}

export default Header;
