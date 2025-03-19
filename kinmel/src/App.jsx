import React, { use } from 'react';

function App() {

  const [data,setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8081')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }
  ,[])
  return (
    <div style={{ padding: '50px' }}>

      <table>
        <th>ID</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <tbody>
          {
            data.map((d,i)=>{
              return(
                <tr key={index}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.phone}</td>
                  <td>{d.email}</td>
                </tr>
              )
            }) 
          }
        </tbody>
      </table>
      
    </div>
  );
}

export default App;