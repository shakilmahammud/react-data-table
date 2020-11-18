// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';
import { DataTab} from './Components/DataTable/DataTable';

function App() {
//   const [data,setData]=useState([])
//   const [query,setQuery]=useState('')
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => response.json())
//     .then(data => setData(data))

// },[])
  return (
    <div className="App">
     {/* <div></div>
     <div><DataTable data={data}/></div> */}
     <DataTab/>
    </div>
  );
}

export default App;
