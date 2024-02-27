import React from 'react'
import Logos from '../components/Logos'

const SponsorsView = () => {
    return (
        <div>
            <div className="w-full mx-auto mb-40 flex flex-col border-gray-500 rounded-xl shadow-md md:h-[300px]">
                <div className="w-full text-center p-5">
                    <h2 className='font-montserrat font-Bold text-4xl mb-10 text-Blue'>CON EL APOYO DE</h2>
                    <Logos />
                </div>
            </div>
        </div>
    )
}

export default SponsorsView
