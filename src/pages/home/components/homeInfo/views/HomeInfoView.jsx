import React from 'react'
import Countdown from '../components/countdown/Countdown'
import Calendar from '../../../../../components/svg/Calendar'
import Time from '../../../../../components/svg/Time'
import Location from '../../../../../components/svg/Location'
import Connection from '../../../../../components/svg/Connection'

const HomeInfoView = () => {
    return (
        <div className='mb-40 desktop:flex desktop:justify-center desktop:items-center'>
            <div className='mb-40 desktop:mb-0 desktop:w-1/2 desktop:flex desktop:items-center desktop:p-4 desktop:h-[537px] desktop:bg-Green desktop:rounded-r-full'>
                <Countdown />
            </div>

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 bg-Blue shadow-md rounded-xl desktop:w-1/2">
                <h2 className="text-4xl font-montserrat font-Bold mb-1 text-White desktop:text-5xl">Consorcio de Asma</h2>
                <h3 className="text-xl font-montserrat font-Bold mb-1 text-White desktop:text-2xl">de hospitales públicos de CABA</h3>
                <div className=" py-4 mb-4">
                    <p className=" font-montserratAlternate font-Regular text-base desktop:text-lg text-White">Inscribite a la jornada informativa sobre el manejo y tratamiento del asma, organizada por el Consorcio de Asma de Hospitales Públicos de CABA. Este evento contará con la participación de expertos de los prestigiosos Hospitales Santojanni, Ramos Mejía y Fernández.</p>
                </div>
                <ul className="flex flex-col justify-center items-start">
                    <li className="flex items-center gap-2 mb-3">
                        <Calendar
                            color='#2FCE91'
                            width='25px'
                            height='25px'
                        />
                        <span className="text-White font-montserratAlternate font-Regular text-sm desktop:text-base">
                            Jueves 4 de abril 2024
                        </span>

                    </li>
                    <li className="flex items-center gap-2 mb-3">
                        <Time
                            color='#2FCE91'
                            width='25px'
                            height='25px'
                        />
                        <span className="text-White font-montserratAlternate font-Regular text-sm desktop:text-base">
                            De 8 a 12:30hs
                        </span>

                    </li>
                    <li className="flex items-center gap-2 mb-3">
                        <Location
                            color='#2FCE91'
                            width='25px'
                            height='25px'
                        />
                        <span className="text-White font-montserratAlternate font-Regular text-sm desktop:text-base">
                            Hospital Santojanni, Pilar 950, CABA
                        </span>

                    </li>
                    <li className="flex items-start gap-2 mb-3">

                        <Connection
                            color='#2FCE91'
                            width='25px'
                            height='25px'
                        />
                        <div className='flex flex-col items-start justify-start text-White font-montserratAlternate font-Regular text-sm desktop:text-base'>
                            <p>Modalidad</p>
                            <p><span className='font-Semibold'>Presencial:</span> Aula 4to piso, Hospital Santojanni.</p>
                            <p><span className='font-Semibold'>Virtual:</span> Transmisión en vivo a través de Zoom.</p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default HomeInfoView