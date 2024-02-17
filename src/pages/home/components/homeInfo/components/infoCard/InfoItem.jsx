import React from 'react'

const InfoItem = ({ textInfo: textInfo, iconInfo: IconInfo }) => {
    return (
        <li
            className="flex items-center gap-2 mb-3"
        >
            <IconInfo
                color='#2FCE91'
                width='25px'
                height='25px'
            />
            <span className="text-White font-montserratAlternate font-Regular text-sm desktop:text-base">
                {textInfo}
            </span>
        </li>
    )
}

export default InfoItem