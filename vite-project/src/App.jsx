import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import TravelData from './data/TravelData'

function App() {
  const travelData = TravelData.map(travel => {
    return (
      <MainContent 
        key={travel.id}
        {...travel}
      />
    )
  })
  return (
    <div className="container">
      <Header />
      {travelData}
    </div>
  )
}

export default App
