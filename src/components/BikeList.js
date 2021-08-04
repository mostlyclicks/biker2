import React from 'react'
import styled from 'styled-components'

const BikeList = () => {
  return (
    <Section>
      <h1>Bike List</h1>
    </Section>
  )
}

export default BikeList


const Section = styled.section`
  min-height:50vh;
  border:1px solid gray;
  padding:1rem;

  @media (min-width:768px) {
    width:50%;
  }
`