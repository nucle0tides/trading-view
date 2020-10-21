import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubscriptionTable from '../SubscriptionTable';
import SubscriptionMRR from '../SubscriptionMRR';
import PipedSubscriptions from '../PipedSubscriptions';
import SubscriptionSlider from '../SubscriptionSlider';

const TradingView = ({ data }) => {
  const [subscriptions, setSubscriptions] = useState({});

  const updateSubscriptions = (company, mrr) => {
    setSubscriptions((previousState) => {
      if (previousState[company]) {
        const newState = previousState;
        delete newState[company];
        return { ...newState };
      }

      return {
        ...previousState,
        [company]: mrr,
      };
    });
  };

  const updateSubscriptionCount = (number) => {
    const subs = data.slice(0, number);
    const newSubs = subs.reduce((acc, val) => ({
      ...acc,
      [val.company]: val.mrr,
    }), {});
    setSubscriptions(newSubs);
  };

  return (
    <Container>
      <Row>
        <Col>
          <SubscriptionMRR subscriptions={subscriptions} />
          <SubscriptionSlider
            maxSubs={Object.keys(data).length}
            numSubs={Object.keys(subscriptions).length}
            onChange={updateSubscriptionCount}
          />
        </Col>
        <Col>
          <PipedSubscriptions subscriptions={subscriptions} />
        </Col>
      </Row>
      <Row>
        <SubscriptionTable
          subscriptions={subscriptions}
          data={data}
          onChange={updateSubscriptions}
        />
      </Row>
    </Container>
  );
};
export default TradingView;
