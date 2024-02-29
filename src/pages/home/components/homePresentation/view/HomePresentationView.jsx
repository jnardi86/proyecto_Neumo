import Director from '../components/Director'
import directorPhoto from '../../../../../assets/speakers/Dr_Fernando_Saldarini_PS.jpg'
import secretaryPhoto from '../../../../../assets/speakers/Dra_Alejandra_Celenza_PS.jpg'

const HomePresentationView = () => {
  return (
    <div className='mb-40 w-full'>
        <div className='w-full  mx-auto p-4 sm:p-6 lg:p-8 bg-Blue shadow-md rounded-xl md:w-[90%] lg:w-[66%] desktop:w-full'>
                <Director 
                    directorTitle='Director'
                    directorPhoto={directorPhoto}
                    directorName='Dr. Fernando Saldarini'
                    secretaryTitle='Secretaria'
                    secretaryPhoto={secretaryPhoto}
                    secretaryName='Dra Alejandra Celenza'
                />
        </div>

    </div>
  )
}

export default HomePresentationView