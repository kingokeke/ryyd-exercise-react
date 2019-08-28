import React from 'react';
import MaleAvatar from './images/thumbs/thumb-121497.png';
import FemaleAvatar from './images/thumbs/thumb-121697.png';
import { NavLink } from 'react-router-dom';

function DriverSideBar({ driverSummary }) {
  return (
    <aside>
      <div className="tm-sidebar-left uk-visible@m">
        <h4 className="uk-text-center uk-text-uppercase uk-text-bold">
          Drivers
        </h4>
        <hr />
        {driverSummary.map(driver => {
          return (
            <NavLink
              key={driver.driverID}
              to={`/drivers/${driver.driverID}`}
              className="driver-link"
              activeClassName="active"
            >
              <img
                className="driver-link-avatar uk-border-circle"
                src={driver.gender === 'male' ? MaleAvatar : FemaleAvatar}
                alt=""
              />
              <ul className="uk-nav uk-nav-default tm-nav">
                <li className="uk-nav-header uk-text-bold">{driver.name}</li>
                <li className="uk-nav">
                  {driver.age},{' '}
                  {driver.gender[0].toUpperCase() + driver.gender.slice(1)}
                </li>
              </ul>
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}

export default DriverSideBar;
