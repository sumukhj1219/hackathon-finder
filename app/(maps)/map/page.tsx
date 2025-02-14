import CoverVideo from '@/components/mapComponents/cover'
import HackathonsListing from '@/components/mapComponents/hackathons'
import MapComponent from '@/components/mapComponents/map'
import React from 'react'

const MapPage = () => {
  return (
    <div>
      <div className='flex '>
      <MapComponent />
      <CoverVideo />
      </div>
        <HackathonsListing />
    </div>
  )
}

export default MapPage