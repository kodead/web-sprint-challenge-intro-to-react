import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [data, setData] = useState([])
  // ❗ Create effects to fetch the data and put it in state
  const getDataA = async () => {
    return await axios.get(urlPlanets);
  }
  const getDataB = async () => {
    return await axios.get(urlPeople);
  }
  useEffect(() => {
    const fetchData = async () => {
      const dataA = await getDataA();
      const dataB = await getDataB();
      const fullData = dataB.data.map((character) => {
        const homeworld = dataA.data.find(planet => planet.id === character.homeworld);
        return {
          ...character,
          homeworld
        };
      })
        
      setData(fullData);
      console.log(data)
      ;

      console.log(fullData)
        
      
    };
    
    fetchData()
  }, [])
  return (
    <div >
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      

   {data.map((character)=> {
     return    <Character key={character.id} character={character} />
     
    })}
  
     </div>
  );
  }


export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
