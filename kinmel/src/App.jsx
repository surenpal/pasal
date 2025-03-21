import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/info') 
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
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
          {data && Array.isArray(data) && data.map((d, i) => (
            <tr key={i}>
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
