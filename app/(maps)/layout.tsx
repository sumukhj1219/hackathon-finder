import React from 'react'

interface MapLayout{
    children : React.ReactNode
}

const MapLayout = ({children}:MapLayout) => {
  return (
    <div className='bg-gradient-to-br from-black via-purple-950 to-black text-white px-8'>
        {children}
    </div>
  )
}

export default MapLayout