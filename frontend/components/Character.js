import React, {useState} from 'react'
import styled from 'styled-components'
function Character(props) { // ❗ Add the props
  const {character} = props
  console.log(character.name)
  const StyledCard = styled.div`
  span {
    color: ${pr => pr.color}
    
  }
  `
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeworld, setShowHomeworld] = useState(false);
  console.log(showHomeworld)
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
    // console.log(showHomeworld)
  };

  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <StyledCard color = 'black' className="character-card" onClick={toggleHomeworld}>
      
      <h3 className="character-name">{character.name}</h3>
      {showHomeworld && (
      <p> Planet: 
        <span className ="character-planet">
          {character.homeworld.name}
          </span>
          </p>
      )}
    </StyledCard>
  

  )
}

export default Character
