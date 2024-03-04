import React from 'react'
import Countdown from '../components/countdown/Countdown'
import InfoCard from '../components/infoCard/InfoCard'
import useData from '../../../useData'

const HomeInfoView = () => {

    const { itemsInformation } = useData();

    const lastIndex = itemsInformation.length - 1;
    const connection = itemsInformation[lastIndex];

    const newItemsInformation = itemsInformation.slice(0, lastIndex);

    return (
        <div className='mb-40 laptop:flex laptop:gap-4 laptop:justify-center laptop:items-center'>
            <div className='mb-40 laptop:mb-0 laptop:w-1/2 laptop:flex laptop:items-center laptop:p-4 laptop:h-[537px] laptop:bg-Green laptop:rounded-r-full'>
                <Countdown />
            </div>
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 bg-Blue shadow-md rounded-xl laptop:w-1/2">
                <InfoCard
                    title='Consorcio de Asma'
                    subTitle='Hospitales públicos de CABA'
                    paragraph='Inscribite a la jornada informativa sobre el manejo y tratamiento del asma, organizada por el Consorcio de Asma de Hospitales Públicos de CABA. Este evento contará con la participación de prestigiosos disertantes de hospitales públicos y privados de la Ciudad de Buenos Aires.'
                    itemsInformation={newItemsInformation}
                    {...connection}
                />
            </div>
        </div>
    )
}

export default HomeInfoView