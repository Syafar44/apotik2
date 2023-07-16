import React, { useState } from 'react';

const Table = ({ employees }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <div className="search-bar">
        <input type="text" placeholder="Cari Obat..." value={searchTerm} onChange={handleSearch} />
      </div>

      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>NAMA OBAT</th>
            <th>TEMPAT</th>
            <th>HARGA</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{formatter.format(employee.salary)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>Tidak ada hasil</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
