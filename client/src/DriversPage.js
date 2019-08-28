import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DriverProfile from './DriverProfile';
import DriverSidebar from './DriverSidebar';

function DriversPage({ driversData, tripsData }) {
  const driverSummary = driversData.reduce((summary, data) => {
    const details = {
      name: data.name,
      gender: data.gender,
      driverID: data.driverID,
      age: new Date().getFullYear() - new Date(data.DOB).getFullYear(),
    };
    return [...summary, details];
  }, []);

  return (
    <>
      <DriverSidebar driverSummary={driverSummary} />

      <Switch>
        <Route
          exact
          path="/drivers"
          render={() => <Redirect to={`/drivers/${driversData[0].driverID}`} />}
        />

        <Route
          exact
          path="/drivers/:driverID"
          render={({ match }) => {
            const driver = driversData.filter(
              item => item.driverID === match.params.driverID,
            )[0];
            return driver ? (
              <DriverProfile driverData={driver} tripsData={tripsData} />
            ) : null;
          }}
        />
      </Switch>
    </>
  );
}
export default DriversPage;
