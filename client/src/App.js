import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';

// API endpoints: trips, drivers, trip, driver, vehicle, stats
function App() {
  const [tripsData, setTripsData] = useState([]);
  const [driversData, setDriversData] = useState([]);
  const [dashboardTableData, setDashboardTableData] = useState([]);

  useEffect(() => {
    const tripsPromise = fetch('/api/trips')
      .then(res => res.json())
      .then(data => {
        setTripsData(data.data);
        return data.data;
      })
      .catch(err => console.log(err));

    const driverPromise = fetch('/api/drivers')
      .then(res => res.json())
      .then(data => {
        setDriversData(data.data);
        return data.data;
      })
      .catch(err => console.log(err));
    (async () => {
      const [trips, drivers] = await Promise.all([tripsPromise, driverPromise]);

      const driverNames = drivers.reduce((acc, val) => {
        return { ...acc, [val.driverID]: val.name };
      }, {});

      const tableRowData = trips
        .reduce((acc, val) => {
          const tripDetails = {
            tripID: val.tripID,
            rider: val.user.name,
            date: new Date(val.created),
            amount: val.billedAmount,
            driver: driverNames[val.driverID] || 'Unregistered Driver',
            isCash: val.isCash,
            driverID: val.driverID,
          };
          return [...acc, tripDetails];
        }, [])
        .sort((a, b) => b.date - a.date);

      setDashboardTableData(tableRowData);
    })();
  }, []);

  return (
    <>
      <Header />
      <Main
        tripsData={tripsData}
        driversData={driversData}
        dashboardTableData={dashboardTableData}
      />
    </>
  );
}

export default App;
