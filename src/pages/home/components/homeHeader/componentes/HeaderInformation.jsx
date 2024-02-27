import React from 'react'

const HeaderInformation = ({ textInfo: label, iconInfo: InformationIcon }) => {
    return (
        <li className='flex gap-2 justify-center items-center w-full py-1'>
            <span>
                <InformationIcon
                    color='#F9F9F9'
                    width='25px'
                    height='25px'
                />
            </span>
            <span className='w-[250px] font-montserratAlternate font-bold text-lg'>{label}</span>
        </li>

    )
}

export default HeaderInformation