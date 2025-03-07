import React from "react";

function ComparisonTable() {
  return (
    <div className='App'>
      <table border="1">
        <thead>
          <tr>
            <th>Feature</th>
            <th>ReactJS</th>
            <th>React Native</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Platform</td>
            <td>Web Applications</td>
            <td>Mobile Applications</td>
          </tr>
          <tr>
            <td>Rendering</td>
            <td>Uses Virtual DOM</td>
            <td>Uses Native Components</td>
          </tr>
          <tr>
            <td>Styling</td>
            <td>CSS</td>
            <td>React Native Stylesheets</td>
          </tr>
        </tbody>
      </table>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default ComparisonTable;
