import './App.css';
import Products from './Products';
import Header from './Header';
import {useState} from 'react';
function App() {

//let[name,setName]=useState();
//let[age,setAge]=useState();
let countries=[
  {id:1,name:"india",capital:"new delhi"},
  {id:2,name:"soutth africa",capital:"cape town"},
  {id:3,name:"new zealand",capital:"wellington"},
  {id:4,name:"USA",capital:"washington"}
]
  return (
    <div className="App">

{
countries.map((country)=>{
  return (
    <div className='data' key={country.id}>
  <h3>{country.name}</h3>
  <p>{country.capital}</p>
   </div>
  )
})
}

 {/* reading input fields   */}
    {/* <input type='text' placeholder='enter name' onChange={(event)=>{
      setName(event.target.value);
    }}/>

 <input type='number' placeholder='enter age' onChange={(event)=>{
      setAge(event.target.value);
    }}/>

    <button type='button' onClick={()=>{
      console.log(name,age)
    }}>Submit</button> */}



{/* Every component can have state and state is data of component */}
{/* if state change comp also change */}


    <Header/>
    <Products/>
    {/* use arrow function if we have a parameter to pass */}
    </div> 
  );
}

export default App;
