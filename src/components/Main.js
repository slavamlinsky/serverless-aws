import React from 'react'
import Welcome from './Welcome.js'
import Hotel from './Hotel.js'
import Events from './Events.js'
import Dining from './Dining.js'
import Attractions from './Attractions.js'
import Rooms from './Rooms.js'

const Main = () => {
  return (
    <main id="wrapper">
        <Welcome />
        <Hotel />
        <Rooms />
        <Dining />
        <Events />
        <Attractions />
    </main>
  )
}

export default Main