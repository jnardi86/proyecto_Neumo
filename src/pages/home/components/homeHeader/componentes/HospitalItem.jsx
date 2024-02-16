import MedicalCard from "../../../../../components/svg/MedicalCard"


const HospitalItem = ({hospital}) => {
  return (
    <li className='flex gap-2 justify-center items-center w-full py-1 lg:justify-start lg:w-[220px] desktop:w-[300px]'>
            <span>
              <MedicalCard
                color='#2FCE91'
                width='25px'
                height='25px'
              />
            </span>
            <span className='w-[175px] font-montserratAlternate font-Regular text-sm desktop:text-base desktop:w-[200px]'>| {hospital}</span>
          </li>
  )
}

export default HospitalItem