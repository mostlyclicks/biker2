import React from 'react'
import AddBike from './components/AddBike'
import BikeList from './components/BikeList'
import styled from 'styled-components'
import './App.css';

function App() {
  return (
    <Main>
      <AddBike />
      <BikeList />
    </Main>
  );
}

export default App;


const Main = styled.div`
  display:flex;
  height:100vh;
  flex-direction:column;
  justify-content:space-around;
  gap:10px;
  padding:10px 5px;

  @media (min-width:768px) {
    flex-direction:row;
    
  }
`
