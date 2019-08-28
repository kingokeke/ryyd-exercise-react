import React, { useState, useEffect } from 'react';
import { PieChart, BarChart } from 'react-chartkick';
import TripHistory from './DashboardTripHistory';
import 'chart.js';

function Dashboard(props) {
  const [maleNumber, setMaleNumber] = useState(0);
  const [femaleNumber, setFemaleNumber] = useState(0);
  const [noOfCashTrips, setNoOfCashTrips] = useState(0);
  const [noOfNonCashTrips, setNoOfNonCashTrips] = useState(0);
  const [billedTotal, setBilledTotal] = useState(0);
  const [cashBilledTotal, setCashBilledTotal] = useState(0);
  const [nonCashBilledTotal, setNonCashBilledTotal] = useState(0);

  const riderGenderData = {
    'Male Users': maleNumber,
    'Female Users': femaleNumber,
  };

  const paymentTypeData = {
    'Cash Trips': noOfCashTrips,
    'Non Cash Trips': noOfNonCashTrips,
  };

  const billingAmountData = {
    'Total Billed Amount': billedTotal,
    'Total Billed Cash Amount': cashBilledTotal,
    'Total Billed Non Cash Amount': nonCashBilledTotal,
  };

  useEffect(() => {
    (async () => {
      fetch('/api/stats')
        .then(res => res.json())
        .then(raw => raw.data)
        .then(data => {
          setMaleNumber(data.male);
          setFemaleNumber(data.female);
          setNoOfCashTrips(data.noOfCashTrips);
          setNoOfNonCashTrips(data.noOfNonCashTrips);
          setBilledTotal(data.billedTotal);
          setCashBilledTotal(data.cashBilledTotal);
          setNonCashBilledTotal(data.nonCashBilledTotal);
        });
    })();
  }, []);

  return (
    <article>
      <div className="uk-section uk-section-default">
        <div className="uk-container uk-container-large">
          <div className="uk-card uk-card-hover uk-card-default uk-card-small uk-card-body">
            <h3 className="uk-text-bold uk-text-uppercase uk-margin-bottom">
              Trip Data Plots
            </h3>
            <div className="uk-text-center" data-uk-grid>
              <div className="uk-width-1@s uk-width-1-2@l">
                <div className="uk-child-width-1-2 uk-text-center" data-uk-grid>
                  <div>
                    <div className="uk-card uk-card-hover uk-card-default uk-card-small uk-card-body">
                      <PieChart
                        id="rider-gender-chart"
                        donut={true}
                        data={riderGenderData}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="uk-card uk-card-hover uk-card-default uk-card-body">
                      <PieChart
                        id="billing-type-chart"
                        donut={true}
                        data={paymentTypeData}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="uk-width-1@s uk-width-1-2@l">
                <div className="uk-card uk-card-hover uk-card-default uk-card-body">
                  <BarChart
                    id="billing-amount-chart"
                    data={billingAmountData}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p />
          </div>
          <TripHistory tableRows={props.dashboardTableData} />
        </div>
      </div>
    </article>
  );
}

export default Dashboard;
