import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8081/new_db') // Ensure this endpoint is correct
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => {
        console.error(err);
        alert("Error fetching data. Please check the backend server.");
      });
  }, []);

  return (
    <div style={{ padding: '50px' }}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr key={index}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.phone}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Welcome to the kinmel.com</h1>
    </div>
  );
}

export default App;
