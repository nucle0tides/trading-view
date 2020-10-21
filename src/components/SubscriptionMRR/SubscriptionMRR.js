import React, { useEffect, useState } from 'react';

const SubscriptionMRR = ({ subscriptions }) => {
  const [totalMRR, setTotalMRR] = useState(0);

  useEffect(() => {
    const mrr = Object.values(subscriptions).map((sub) => parseInt(sub, 10));
    const total = mrr.reduce((acc, val) => (acc + val), 0);

    setTotalMRR(total);
  }, [subscriptions]);

  return (
    <React.Fragment>
      <h5>MRR for New Subscriptions</h5>
      <h1>${totalMRR}</h1><span>{Object.keys(subscriptions).length} Subscriptions</span>
    </React.Fragment>
  );
};

export default SubscriptionMRR;
