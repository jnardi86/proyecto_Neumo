import React from 'react'
import useData from '../../../useData';


const Logos = () => {

    const { logos } = useData()

    return (
        <div className="w-full mx-auto mb-40 flex flex-row flex-wrap justify-center">
            {logos.map((logo, index) => {
                return (
                    <img className="mx-3 md:h-[80px]" key={index} src={logo.image}></img>
                )
            })}
        </div>
    )
}

export default Logos
