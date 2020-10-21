import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SubscriptionTable from '../SubscriptionTable';
import SubscriptionMRR from '../SubscriptionMRR';
import PipedSubscriptions from '../PipedSubscriptions';
import SubscriptionSlider from '../SubscriptionSlider';

const TradingView = ({ data }) => {
  const [subscriptions, setSubscriptions] = useState({});

  const handleSubmit = () => {
    /*
      subscriptions is an object w/ the shape { [company]: mrr }
      depending on the endpoint this submission is hitting, we would likely want to send
      a list of unique identifiers instead of the value of `subscriptions`
     */
    alert(JSON.stringify(subscriptions));
  };

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

  /*
     Assuming the 'Pipe Subscriptions' button is a form submission,
     this component should probably be wrapped in a `<form>`

     Quite a few spots in the codebase where I grab the number of data and subscriptions
     w/ Object.keys, could possibly add another useState line for subs

   */
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
          <Button variant="primary" onClick={handleSubmit}>Pipe Subscriptions -&gt; </Button>
        </Col>
      </Row>
      <Row>
        <div>
          <input
            type="checkbox"
            id="select-all"
            name="select-all"
            onChange={() => (
              Object.keys(subscriptions).length === Object.keys(data).length
                ? updateSubscriptionCount(0)
                : updateSubscriptionCount(Object.keys(data).length)
            )}
            style={{ margin: '1rem' }}
          />
          <label htmlFor="select-all">Select All</label>
        </div>
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
