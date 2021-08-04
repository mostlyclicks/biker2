import React from 'react'
import styled from 'styled-components'

const AddBike = () => {
  return (
    <Section>
      <h1>Add Bike</h1>
    </Section>
  )
}

export default AddBike

const Section = styled.section`
  min-height:50vh;
  border:1px solid gray;
  padding:1rem;
  @media (min-width:768px) {
    width:50%;
  }
`
