import { useEffect, useState } from "react"
import User from "../../../../../components/svg/User";
import Computer from "../../../../../components/svg/Computer";



const HomeFormView = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [hospital, setHospital] = useState('');
  const [modalidad, setModalidad] = useState('');
  const [isToggled, setIsToggled] = useState(true);
  const [btnSubmitText, setBtnSubmitText] = useState('Inscribirse');



  const handleSubmit = async (e) => {

    e.preventDefault();
    setBtnSubmitText('Enviando...')
    console.log(isToggled)

    // const currentModalidad = isToggled ? 'presencial' : 'virtual';


    const formData = {
      name: name,
      lastName: lastName,
      email: email,
      hospital: hospital,
      modalidad: isToggled ? 'Presencial' : 'Virtual',
    }

    console.log(formData)

    try {
      // Fetch Gmail to send email
      // const response = await fetch(urlFetchDailu, {
      //   method: 'POST',
      //   redirect: "follow",
      //   dataType: 'json',
      //   accepts: 'application/json',
      //   body: JSON.stringify(formData)
      // });

      // Handle the response from the Google Apps Script endpoint
      // const data = await response.json();
      // console.log("Response status: ", data.status);

      setTimeout(() => { setBtnSubmitText('Inscribirse') }, 3000);

      // Reset form fields
      setName('');
      setLastName('');
      setEmail('');
      setHospital('');
      setModalidad('')
    } catch (error) {
      console.error('Error:', error);
    }
  }

  //MANEJO DE TOOGLE
  const onToggle = () => {
    setIsToggled(previsToggled => !previsToggled);
    setModalidad(currentIsToggled => (currentIsToggled ? 'Presencial' : 'Virtual'));
  }

  return (
    <div className='mb-40 desktop:flex'>
      <div className="max-w-2xl mx-auto mb-10 desktop:w-1/2 desktop:flex desktop:flex-col desktop:justify-center desktop:items-end">
        <div className={`${isToggled ? 'bg-Green' : 'bg-Blue'} rounded-lg p-4 sm:p-6 lg:p-8 desktop:rounded-full desktop:w-[500px] desktop:h-[500px] desktop:flex desktop:flex-col desktop:justify-center desktop:items-center`} >
        <h2 className={`${isToggled ? ' text-Blue' : 'text-Green'} text-4xl font-montserratSubrayada font-Bold mb-4 text-center desktop:text-5xl`}>Importante</h2>
        <div className="flex gap-3 mb-4 justify-start w-full desktop:justify-center">
          <span><User
            color={`${isToggled ? '#0E58A8' : '#2FCE91'}`}
            width='25px'
            heigh='25px'
          /></span>
          <p className={`${isToggled ? 'text-Blue' : 'text-Green'} font-montserrat font-Semibold text-base`}>El evento presencial tiene un cupo de 80 personas.</p>
        </div>
        <div className="flex gap-3 mb-4 justify-start w-full desktop:justify-center">
          <span>
            <Computer
              color={`${isToggled ? '#0E58A8' : '#2FCE91'}`}
              width='25px'
              heigh='25px'
            />
          </span>
          <p className={`${isToggled ? 'text-Blue' : 'text-Green'} font-montserrat font-Semibold text-base`}>La modalidad virtual no presenta límite de cupo.</p>
        </div>
        </div>
      </div>
      <div className={`max-w-2xl mx-auto px-2 py-5 mb-10 rounded-xl ${isToggled ? 'bg-Blue text-White' : 'bg-Green text-Blue'} desktop:w-1/2`}>
        <div className="w-full text-left md:text-center">
          <h2 className='font-montserrat font-Bold text-4xl mb-10'>INSCRIPCION</h2>
        </div>
        <form className="max-w-sm mx-auto" id="inscriptionForm" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-4 text-xl font-montserratAlternate font-Semibold">Modalidad</label>
            <label className="block mb-4 text-lg font-montserratAlternate font-Regular">{isToggled ? 'Presencial' : 'Virtual'}</label>
            <label htmlFor="check" className={`w-20 h-10 rounded-full relative ${isToggled ? 'bg-Green' : 'bg-Blue'}`}>
              <input
                type="checkbox"
                id="check"
                className="sr-only peer"
                checked={isToggled}
                onChange={onToggle}
              />
              <div className={`relative w-14 h-7 bg-Blue peer-focus:outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-White after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-Green mb-4 
              `}></div>
            </label>
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-4 text-xl font-montserratAlternate font-Semibold">Nombre</label>
            <input
              type="text"
              id="name"
              className="bg-White border border-White text-Blue font-montserratAlternate font-Regular text-lg rounded-xl block mx-auto w-full p-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required />
          </div>
          <div className="mb-5">
            <label htmlFor="lastName" className="block mb-4 text-xl font-montserratAlternate font-Semibold">Apellido</label>
            <input
              type="text"
              id="lastName"
              className="bg-White border border-White text-Blue font-montserratAlternate font-Regular text-lg rounded-xl block mx-auto w-full p-3"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-4 text-xl font-montserratAlternate font-Semibold">Email</label>
            <input
              type="email"
              id="email"
              className="bg-White border border-White text-Blue font-montserratAlternate font-Regular text-lg rounded-xl block mx-auto w-full p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </div>
          <div className="mb-5">
            <label htmlFor="hospital" className="block mb-4 text-xl font-montserratAlternate font-Semibold">Hospital</label>
            <input
              type="text"
              id="hospital"
              className="bg-White border border-White text-Blue font-montserratAlternate font-Regular text-lg rounded-xl block mx-auto w-full p-3"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              required />
          </div>
          <div className="w-full flex flex-col md:items-center md:justify-center my-10">
            <button
              type="submit"
              className={`font-montserrat font-Semibold  text-2xl  border-solid border-2  hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-Green rounded-lg w-full  px-5 py-2.5 text-center
              ${isToggled ? 'border-White text-White hover:from-Green to-Blue' : 'border-Blue text-Blue hover:from-Blue to-Green hover:text-White'}`}
              value={btnSubmitText}>{btnSubmitText}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HomeFormView