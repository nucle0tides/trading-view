import React from 'React';

const SubscriptionMRR = ({ subscriptions }) => {
  const mrr = Object.values(subscriptions);
  const totalMRR = mrr.reduce((acc, val) => (acc + val), 0);
  return (
      <>
      <h5>MRR for New Subscriptions</h5>
      <h1>${totalMRR}</h1>
    </>
  );
};
