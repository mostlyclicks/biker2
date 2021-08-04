import React, { useState } from 'react'
import styled from 'styled-components'

const AddBike = () => {

  const [ bikeName, setBikeName ] = useState('')
  const [ bikeSize, setBikeSize ] = useState('')
  const [ bikeColor, setBikeColor ] = useState('')

  const bikeNameHandler = (event) => {
    setBikeName(event.target.value)

  }

  const bikeSizeHandler = (event) => {
    setBikeSize(event.target.value)
  }

  const bikeColorHandler = (event) => {
    setBikeColor(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(bikeName)
    

  }

  return (
    <Section>
      <h1>Add a Bike</h1>
      <BikeForm onSubmit={submitHandler}>
        <FormControl>
          <input type="text" onChange={bikeNameHandler} name="name" value={bikeName} placeholder='Bike Make/Model'/>
        </FormControl>
        <FormControl>
          <input type="text" name="size" value={bikeSize} onChange={bikeSizeHandler} placeholder="Bike Size" />
        </FormControl>
        <FormControl>
          <input type="text" name="color" value={bikeColor} onChange={bikeColorHandler} placeholder="Bike Color" />
        </FormControl>
      <button type="submit">Submit</button>
      </BikeForm>
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
    min-height:50vh;
  }
`

const BikeForm = styled.form`

`

const FormControl = styled.div`
  margin:1rem 0;
`
