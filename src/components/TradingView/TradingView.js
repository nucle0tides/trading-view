import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubscriptionTable from '../SubscriptionTable';

const TradingView = ({ data }) => {
  const [subscriptions, setSubscriptions] = useState({});

  const updateSubscriptions = (company, mrr) => {
    setSubscriptions((previousState) => {
      if (previousState[company]) {
        const newState = previousState;
        delete newState[company];
        return newState;
      }

      return {
        ...previousState,
        [company]: mrr,
      };
    });
    console.log(subscriptions);
  };

  return (
    <Container>
      <Row>
        <Col>MRR</Col>
        <Col>Yearly Revenue</Col>
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
