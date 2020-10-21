import React, { useEffect, useState } from 'react';

const PipedSubscriptions = ({ subscriptions }) => {
  const [yearlyMRR, setYearlyMRR] = useState(0);

  useEffect(() => {
    // actually need to take startDate and endDate into account, but we won't worry abt that rn
    const mrr = Object.values(subscriptions).map((sub) => parseInt(sub, 10));
    const total = mrr.reduce((acc, val) => (acc + val), 0) * 12;

    setYearlyMRR(total);
  }, [subscriptions]);

  return (
    <React.Fragment>
      <h5>Total Piped Subscriptions</h5>
      <h1>${yearlyMRR}</h1>
      <h6>{Object.keys(subscriptions).length} Subscriptions</h6>
    </React.Fragment>
  );
};

export default PipedSubscriptions;
