import React, { useState } from 'react';

import Header from './Header';
import Table from './Table';

import { employeesData } from '../../data';

const Dashboard = ({ setIsAuthenticated }) => {
  const [employees] = useState(employeesData);

  return (
    <div className="container">
      {(
        <>
          <Header
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            employees={employees}
          />
        </>
      )}

    </div>
  );
};

export default Dashboard;
