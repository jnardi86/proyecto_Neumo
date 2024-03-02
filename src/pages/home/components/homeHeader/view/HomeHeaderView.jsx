import React, {useEffect, useState} from 'react'
import Hospital from '../../../../../components/svg/Hospital'
import HeaderInformation from '../componentes/HeaderInformation'
import HospitalItem from '../componentes/HospitalItem'
import HeaderButton from '../componentes/HeaderButton'
import hospitalLogo from '../../../../../assets/logo-hospi.png'
import useData from '../../../useData'
import hospitales from "../../../../../assets/Hero_3Hs_layer_blue.png"

const scrollToForm = () => {
  const formulario = document.getElementById('inscriptionForm');
  formulario.scrollIntoView({ behavior: 'smooth' });
}

const HomeHeaderView = () => {

  const {
    itemsHospitals,
    itemsInformation,
    screenWidth
  } = useData();

  const newInformationItems = itemsInformation.slice(0, -1);

  return (
    <div
      className=' bg-Blue text-White flex flex-col items-center justify-center mb-40 lg:bg-none'
      style={{
        backgroundImage: screenWidth > 1024 ? `url(${hospitales})` : 'none', // Use the url() syntax
        backgroundSize: 'auto 100%', // Adjust this property based on your design requirements
        backgroundPosition: 'right', // Adjust this property based on your design requirements
        backgroundRepeat: 'no-repeat', // Do not repeat the background image
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '600px'
      }}
      >
      {/* Logo */}
      <div className='w-full flex gap-2 justify-center items-center py-5 ps-5 tablet:justify-start desktop:justify-start desktop:p-5'>
        <div>
          {/* <Hospital
            color='#F9F9F9'
            width='35px'
            height='35px'
          /> */}
          <img src={hospitalLogo} className=' w-16 h-16' />
        </div>
        <div>
          <p className='font-montserrat font-Semibold text-lg'>
            | Hospital Santojanni
          </p>
        </div>
      </div>
      {/* Title */}
      <div className='w-full flex flex-col justify-center items-center font-montserrat font-Bold ps-5 tablet:items-start desktop:items-start desktop:p-5'>
        <h1 className='text-2xl lg:text-5xl desktop:text-7xl'>CONSORCIO DE ASMA 2024</h1>
        <h3 className='text-lg lg:text-3xl desktop:text-5xl'>Hospitales Públicos de CABA</h3>
      </div>
      {/* 3 hospitales */}
      < div className='w-full flex justify-center my-10 lg:my-0 ps-5 tablet:justify-start desktop:justify-start desktop:pl-5'>
        <ul className='flex flex-col items-center lg:flex-row'>
          {itemsHospitals.map((hospital, index) => (
            <HospitalItem
              key={index}
              {...hospital}
            />
          ))}
        </ul>
      </div>
      {/* Button Registrar - Disabled */}
      <div className='w-full flex flex-col justify-center items-center my-10 lg:my-16 desktop:items-start desktop:p-5'>
        {/* <HeaderButton
          className='px-6 py-2 text-White bg-Green border-solid border-2 border-Green hover:bg-Blue hover:border-White rounded-2xl font-montserrat text-2xl font-Semibold desktop:p-5'
          onClick={scrollToForm}
          type='button'
          label='INSCRIBIRSE'
        /> */}
      </div>
      {/* <div className='flex justify-center items-center w-full bg-Green py-5 desktop:rounded-tl-full desktop:rounded-tr-full'> */}
      <div className='flex justify-center items-center w-auto px-8 bg-Green py-5 desktop:rounded-tl-full desktop:rounded-tr-full'>
        <ul className='flex flex-col items-center md:flex-row'>
          {
            newInformationItems.map((infoItem, index) => (
              <HeaderInformation
                key={index}
                {...infoItem}
              />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default HomeHeaderView