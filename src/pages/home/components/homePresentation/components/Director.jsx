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
    <div className='flex flex-col justify-center items-center laptop:flex-row laptop:space-x-72 desktop:space-x-48'>
      {
        authorities.map((authority, index)=>(

          <div key={index} className='border-solid'>
          <h2 className="text-4xl text-center font-montserrat font-Bold mb-1 pb-1 text-White ">{authority.position}</h2>
          <div className="w-full pt-5 flex items-center justify-center">
            <img src={authority.photo} className=" w-64 rounded-lg laptop:transition-all laptop:duration-300 laptop:cursor-pointer laptop:filter laptop:grayscale laptop:hover:grayscale-0" alt={`${authority.position} Photo`} />
          </div>
          <div className="w-full mb-10 p-5 flex flex-col justify-center items-center rounded-xl md:px-2 md:py-5">
            <h3 className="text-xl p-2 font-montserrat font-Regular text-White md:text-2xl">{authority.name}</h3>
          </div>
        </div>

        ))
      }
      
    </div>
  )
}

export default Director