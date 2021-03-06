import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const SubscriptionTable = ({ subscriptions, data, onChange }) => {
  const [checked, setChecked] = useState({});

  useEffect(() => {
    setChecked(subscriptions);
  }, [subscriptions]);

  /*
     Hardcoding these works for now. If we need a reusable table, that can be addressed later.
   */
  const headers = ['Company Name', 'Status', 'Invoice No.', 'Synced From', 'Start Date', 'End Date', 'Monthly Revenue'];

  const handleChange = (e) => {
    onChange(e.target.value, e.target.dataset.mrr);
  };

  /*
     TODO:
     Format startDate and endDate in a more human-readable format
     Add $ in front of MRR

     Get UUIDs for 'row' and possibly use that as the checkbox value instead
   */
  return (
    <Table>
      <thead>
        <tr>
          <th />
          {headers.map((header) => <th>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.company}>
            <td>
              <input
                type="checkbox"
                id={row.company}
                name={row.company}
                value={row.company}
                data-mrr={row.mrr}
                checked={!!checked[row.company]}
                onChange={handleChange}
              />
            </td>
            <td>{row.company}</td>
            <td>{row.status}</td>
            <td>{row.invoiceID}</td>
            <td>Zuora</td>
            <td>{row.startDate}</td>
            <td>{row.endDate}</td>
            <td>{row.mrr}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SubscriptionTable;
