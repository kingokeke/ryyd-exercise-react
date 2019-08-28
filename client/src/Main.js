import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import DriversPage from './DriversPage';

function Main({ tripsData, dashboardTableData, driversData }) {
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Dashboard dashboardTableData={dashboardTableData} />}
        />
        <Route
          path="/drivers"
          render={() => (
            <DriversPage driversData={driversData} tripsData={tripsData} />
          )}
        />
      </Switch>
    </main>
  );
}

export default Main;
