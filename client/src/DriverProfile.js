import React, { useState, useEffect } from 'react';
import MaleAvatar from './images/thumbs/thumb-121497.png';
import FemaleAvatar from './images/thumbs/thumb-121697.png';

function DriverProfile({ driverData, tripsData }) {
  const [vehicleDetails, setVehicleDetails] = useState([]);
  const driverTrips =
    tripsData &&
    driverData &&
    tripsData
      .filter(trip => trip.driverID === driverData.driverID)
      .sort((a, b) => new Date(b.created) - new Date(a.created));

  const vehicleIDs = driverData && driverData.vehicleID;

  useEffect(() => {
    (async () => {
      const vehicleDataPromises = vehicleIDs.map(ID => {
        return fetch(`/api/vehicle/${ID}`)
          .then(res => res.json())
          .then(data => data.data);
      });

      Promise.all(vehicleDataPromises).then(vehicleData =>
        setVehicleDetails(vehicleData),
      );
    })();
  }, [vehicleIDs]);

  return (
    <article>
      <div className="tm-main uk-section uk-section-default">
        <div className="uk-container uk-container">
          <div>
            <div className="uk-card uk-card-hover uk-card-default uk-card-large uk-card-body">
              <img
                className="uk-align-right driver-profile-avatar uk-border-circle"
                src={
                  driverData && driverData.gender === 'male'
                    ? MaleAvatar
                    : FemaleAvatar
                }
                alt=""
              />
              <h2 className="">{driverData && driverData.name}</h2>
              <p className="uk-text-small profile-id uk-text-bold">
                ID: {driverData && driverData.driverID}
              </p>
              <h4 className="uk-text-bold uk-text-uppercase">
                Profile Details
              </h4>
              <p>
                <span className="uk-text-bold">Gender</span>:{' '}
                {driverData &&
                  driverData.gender[0].toUpperCase() +
                    driverData.gender.slice(1)}
              </p>
              <p>
                <span className="uk-text-bold">DOB</span>:{' '}
                {driverData && new Date(driverData.DOB).toLocaleDateString()}
              </p>
              <p>
                <span className="uk-text-bold">Agent</span>:{' '}
                {driverData && driverData.agent}
              </p>
              <h4 className="uk-text-bold uk-text-uppercase">
                Contact Details
              </h4>
              <p>
                <span uk-icon="icon: mail; ratio: 1.5" />{' '}
                {driverData && driverData.email}
              </p>
              <p>
                <span uk-icon="icon: receiver; ratio: 1.5" />{' '}
                {driverData && driverData.phone}
              </p>
              <p>
                <span uk-icon="icon:home; ratio: 1.5" />{' '}
                {driverData && driverData.address}
              </p>
              <h4 className="uk-text-bold uk-text-uppercase">Vehicles Owned</h4>
              <table className="uk-table uk-table-small uk-table-striped uk-table-hover uk-table-divider">
                <thead>
                  <tr>
                    <th>Vehicle Brand</th>
                    <th>Plate Number</th>
                    <th>Date of Purchase</th>
                    <th>Purchase Condition</th>
                    <th>Vehicle ID</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicleDetails &&
                    vehicleDetails.map(vehicle => {
                      return (
                        <tr key={vehicle.vehicleID}>
                          <td>{vehicle.manufacturer}</td>
                          <td>{vehicle.plate}</td>
                          <td>
                            {new Date(vehicle.acquired).toLocaleDateString()}
                          </td>
                          <td>{vehicle.acquiredNew ? 'New' : 'Used'}</td>
                          <td>{vehicle.vehicleID}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <h4 className="uk-text-bold uk-text-uppercase">Trip History</h4>
              <div className="uk-overflow-auto">
                <table className="uk-table uk-table-small uk-table-striped uk-table-hover uk-table-divider">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Rider</th>
                      <th>Pickup</th>
                      <th>Destination</th>
                      <th>Fare</th>
                      <th>Payment Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    {driverTrips &&
                      driverTrips.map(trip => {
                        return (
                          <tr key={trip.tripID}>
                            <td>{new Date(trip.created).toLocaleString()}</td>
                            <td>{trip.user.name}</td>
                            <td>{trip.pickup.address}</td>
                            <td>{trip.destination.address}</td>
                            <td>${trip.billedAmount}</td>
                            <td>{trip.isCash ? 'Cash' : 'Debit Card'}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default DriverProfile;
