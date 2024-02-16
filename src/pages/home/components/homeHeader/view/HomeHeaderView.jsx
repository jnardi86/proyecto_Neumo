import React from 'react'
import Hospital from '../../../../../components/svg/Hospital'
import MedicalCard from '../../../../../components/svg/MedicalCard'
import Calendar from '../../../../../components/svg/Calendar'
import Time from '../../../../../components/svg/Time'
import Location from '../../../../../components/svg/Location'


const HomeHeaderView = () => {
  return (
    <div className=' bg-Blue text-White flex flex-col items-center justify-center mb-40'>
      <div className='w-full flex gap-2 justify-center items-center py-5 desktop:justify-start desktop:p-5'>
        <div>
          <Hospital
            color='#F9F9F9'
            width='35px'
            height='35px'
          />
        </div>
        <div>
          <p className='font-montserrat font-Semibold text-lg'>
            | Hospital Santojanni
          </p>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center font-montserrat font-Bold desktop:items-start desktop:p-5'>
        <h1 className='text-2xl lg:text-5xl desktop:text-7xl'>CONSORCIO DE ASMA 2024</h1>
        <h3 className='text-lg lg:text-3xl desktop:text-5xl'>De Hospitales Públicos de CABA</h3>
      </div>
      < div className='w-full flex justify-center my-10 lg:my-0 desktop:justify-start desktop:pl-5'>
        <ul className='flex flex-col items-center lg:flex-row'>
          <li className='flex gap-2 justify-center items-center w-full py-1 lg:justify-start lg:w-[220px] desktop:w-[300px]'>
            <span>
              <MedicalCard
                color='#2FCE91'
                width='25px'
                height='25px'
              />
            </span>
            <span className='w-[175px] font-montserratAlternate font-Regular text-sm desktop:text-base desktop:w-[200px]'>| Hospital Santojanni</span>
          </li>
          <li className='flex gap-2 justify-center items-center w-full py-1 lg:justify-start lg:w-[220px] desktop:w-[300px]'>
            <span>
              <MedicalCard
                color='#2FCE91'
                width='25px'
                height='25px'
              />
            </span>
            <span className='w-[175px] font-montserratAlternate font-Regular text-sm desktop:text-base desktop:w-[200px]'>| Hospital Ramos Mejía</span>
          </li>
          <li className='flex gap-2 justify-center items-center w-full py-1 lg:justify-start lg:w-[220px] desktop:w-[]300px'>
            <span >
              <MedicalCard
                color='#2FCE91'
                width='25px'
                height='25px'
              />
            </span>
            <span className='w-[175px] font-montserratAlternate font-Regular text-sm desktop:text-base desktop:w-[200px]'>| Hospital Fernandez</span>
          </li>
        </ul>
      </div>
      <div className='w-full flex flex-col justify-center items-center my-10 lg:my-16 desktop:items-start desktop:p-5'>
        <button
          className="px-6 py-2 text-White bg-Green border-solid border-2 border-Green hover:bg-Blue hover:border-White rounded-2xl font-montserrat text-2xl font-Semibold desktop:p-5 "
          onClick={() => {
            const formulario = document.getElementById('inscriptionForm');
            formulario.scrollIntoView({ behavior: 'smooth' });
          }}
          type='button'
        >
          INSCRIBIRSE
        </button>
      </div>
      <div className='flex justify-center items-center w-full bg-Green py-5 desktop:rounded-tl-full desktop:rounded-tr-full'>
        <ul className='flex flex-col items-center md:flex-row'>
          <li className='flex gap-2 justify-center items-center w-full py-1'>
            <span>
              <Calendar
                color='#F9F9F9'
                width='25px'
                height='25px'
              />
            </span>
            <span className='w-[175px] font-montserratAlternate font-Regular text-sm'>Jueves 4 de abril</span>
          </li>
          <li className='flex gap-2 justify-center items-center w-full py-1'>
            <span>
              <Time
                color='#F9F9F9'
                width='25px'
                height='25px'
              />
            </span>
            <span className='w-[175px] font-montserratAlternate font-Regular text-sm'>de 8 a 12:30hs</span>
          </li>
          <li className='flex gap-2 justify-center items-center w-full py-1'>
            <span >
              <Location
                color='#F9F9F9'
                width='25px'
                height='25px'
              />
            </span>
            <span className='w-[175px] font-montserratAlternate font-Regular text-sm'>Hospital Santojanni</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomeHeaderView