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
            <span className='w-[175px] font-montserratAlternate font-Regular text-sm'>{label}</span>
        </li>

    )
}

export default HeaderInformation