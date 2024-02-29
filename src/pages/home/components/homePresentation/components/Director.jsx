import React from 'react'

const Director = ({
  directorTitle,
  directorPhoto,
  directorName,
  secretaryTitle,
  secretaryPhoto,
  secretaryName }) => {

    const authorities = [
      {
        position: directorTitle,
        photo: directorPhoto,
        name: directorName 
      },
      {
        position: secretaryTitle,
        photo: secretaryPhoto,
        name: secretaryName 
      },
      

    ]

  return (
    <div className='flex flex-col justify-center items-center desktop:flex-row desktop:space-x-48'>
      {
        authorities.map((authority, index)=>(

          <div key={index} className='border-solid'>
          <h2 className="text-4xl text-center border-White font-montserrat font-Bold mb-1 pb-1 text-White desktop:text-5xl">{authority.position}</h2>
          <div className="w-full pt-5 flex items-center justify-center">
            <img src={authority.photo} className="w-80 md:w-96 rounded-lg desktop:transition-all desktop:duration-300 desktop:cursor-pointer desktop:filter desktop:grayscale hover:grayscale-0" alt={`${authority.position} Photo`} />
          </div>
          <div className="w-full mb-10 p-5 flex flex-col justify-center items-center rounded-xl md:px-2 md:py-5">
            <h3 className="text-xl p-2 font-montserrat font-Bold text-White md:text-2xl">{authority.name}</h3>
          </div>
        </div>

        ))
      }
      
    </div>
  )
}

export default Director