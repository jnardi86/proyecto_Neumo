import React from 'react'
import Hospital from '../../../../../components/svg/Hospital'
import HeaderInformation from '../componentes/HeaderInformation'
import HospitalItem from '../componentes/HospitalItem'
import HeaderButton from '../componentes/HeaderButton'
import hospitalLogo from '../../../../../assets/logo-hospi.png'
import useData from '../../../useData'

const scrollToForm = () => {
  const formulario = document.getElementById('inscriptionForm');
  formulario.scrollIntoView({ behavior: 'smooth' });
}

const HomeHeaderView = () => {

  const { 
    itemsHospitals, 
    itemsInformation
   } = useData();

   const newInformationItems = itemsInformation.slice(0, -1);

  return (
    <div className=' bg-Blue text-White flex flex-col items-center justify-center mb-40'>
      <div className='w-full flex gap-2 justify-center items-center py-5 desktop:justify-start desktop:p-5'>
        <div>
          {/* <Hospital
            color='#F9F9F9'
            width='35px'
            height='35px'
          /> */}
        <img src={hospitalLogo} className=' w-16 h-16'/>
        </div>
        <div>
          <p className='font-montserrat font-Semibold text-lg'>
            | Hospital Santojanni
          </p>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center font-montserrat font-Bold desktop:items-start desktop:p-5'>
        <h1 className='text-2xl lg:text-5xl desktop:text-7xl'>CONSORCIO DE ASMA 2024</h1>
        <h3 className='text-lg lg:text-3xl desktop:text-5xl'>Hospitales Públicos de CABA</h3>
      </div>
      < div className='w-full flex justify-center my-10 lg:my-0 desktop:justify-start desktop:pl-5'>
        <ul className='flex flex-col items-center lg:flex-row'>
          {itemsHospitals.map((hospital, index) => (
            <HospitalItem
              key={index}
              {...hospital}
            />
          ))}
        </ul>
      </div>
      <div className='w-full flex flex-col justify-center items-center my-10 lg:my-16 desktop:items-start desktop:p-5'>
        {/* <HeaderButton
          className='px-6 py-2 text-White bg-Green border-solid border-2 border-Green hover:bg-Blue hover:border-White rounded-2xl font-montserrat text-2xl font-Semibold desktop:p-5'
          onClick={scrollToForm}
          type='button'
          label='INSCRIBIRSE'
        /> */}
      </div>
      <div className='flex justify-center items-center w-full bg-Green py-5 desktop:rounded-tl-full desktop:rounded-tr-full'>
        <ul className='flex flex-col items-center md:flex-row'>
          {
            newInformationItems.map((infoItem, index)=>(
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