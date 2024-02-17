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
        <div className='mb-40 desktop:flex desktop:justify-center desktop:items-center'>
            <div className='mb-40 desktop:mb-0 desktop:w-1/2 desktop:flex desktop:items-center desktop:p-4 desktop:h-[537px] desktop:bg-Green desktop:rounded-r-full'>
                <Countdown />
            </div>
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 bg-Blue shadow-md rounded-xl desktop:w-1/2">
                <InfoCard
                    title='Consorcio de Asma'
                    subTitle='de hospitales públicos de CABA'
                    paragraph='Inscribite a la jornada informativa sobre el manejo y tratamiento del asma, organizada por el Consorcio de Asma de Hospitales Públicos de CABA. Este evento contará con la participación de expertos de los prestigiosos Hospitales Santojanni, Ramos Mejía y Fernández.'
                    itemsInformation={newItemsInformation}
                    {...connection}
                />
            </div>
        </div>
    )
}

export default HomeInfoView