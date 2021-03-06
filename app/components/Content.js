import React from 'react';
import { Table } from 'react-bootstrap';

export default (props) => {
  if (!props.sourceName) return <div/>;

  const rows = Object.keys(props.data).map((item, key) => {
    return (
      <tr key={key}>
        <td>{item}</td>
        <td>{props.data[item][props.sourceName.value] || 'N/A'}</td>
      </tr>
    );
  });
  return (
     <Table striped bordered condensed hover>
       <thead>
         <tr>
           <th>Key</th>
           <th>Value</th>
         </tr>
       </thead>
       <tbody>
         {rows}
       </tbody>
     </Table>
  );
};
