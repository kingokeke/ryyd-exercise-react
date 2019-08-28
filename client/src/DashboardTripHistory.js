import React from 'react';
import { Link } from 'react-router-dom';

function DashboardTripHistory({ tableRows }) {
  return (
    <div className="uk-card uk-card-hover uk-card-default uk-card-large uk-card-body">
      <h3 className="uk-text-bold uk-text-uppercase">Trip History</h3>
      <div className="uk-overflow-auto">
        <table className="uk-table uk-table-small uk-table-striped uk-table-hover uk-table-divider">
          <thead>
            <tr>
              <th>S/No.</th>
              <th>Date</th>
              <th>Driver</th>
              <th>Rider</th>
              <th>Fare</th>
              <th>Payment Method</th>
              <th>More Info</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map(trip => {
              return (
                <tr key={trip.tripID}>
                  <td>{tableRows.indexOf(trip) + 1}</td>
                  <td>{trip.date.toLocaleString()}</td>
                  <td>
                    <Link to={`/drivers/${trip.driverID}`}>{trip.driver}</Link>
                  </td>
                  <td>{trip.rider}</td>
                  <td>${trip.amount}</td>
                  <td>{trip.isCash ? 'Cash' : 'Debit Card'}</td>
                  <td>
                    <Link
                      to={`/trips/${trip.tripID}`}
                      className="uk-icon-link"
                      data-uk-icon="icon: info; ratio: 1.5;"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default DashboardTripHistory;
