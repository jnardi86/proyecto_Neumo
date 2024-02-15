import { useState } from "react"



const HomeFormView = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [hospital, setHospital] = useState('');
  const [modalidad, setModalidad] = useState('');
  const [btnSubmitText, setBtnSubmitText] = useState('Inscribirse');


  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnSubmitText('Enviando...')

    const formData = {
      name: name,
      lastName: lastName,
      email: email,
      hospital: hospital,
      modalidad: modalidad,
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

  return (
    <div className='bg-White '>
      <div className='px-2 py-2 mb-10 bg-Blue'>
        <h2 className='font-montserrat font-Bold text-4xl text-White mb-5'>INSCRIPCION</h2>
        <form className="max-w-sm mx-auto" id="inscriptionForm" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-4 text-xl font-Semibold text-White">Nombre</label>
            <input
              type="text"
              id="name"
              className="bg-White border border-White text-Blue font-montserratAlternate font-Regular text-lg rounded-xl block mx-auto w-full p-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required />
          </div>
          <div className="mb-5">
            <label htmlFor="lastName" className="block mb-4 text-xl font-Semibold text-White">Apellido</label>
            <input
              type="text"
              id="lastName"
              className="bg-White border border-White text-Blue font-montserratAlternate font-Regular text-lg rounded-xl block mx-auto w-full p-3"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-4 text-xl font-Semibold text-White">Email</label>
            <input
              type="email"
              id="email"
              className="bg-White border border-White text-Blue font-montserratAlternate font-Regular text-lg rounded-xl block mx-auto w-full p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </div>
          <div className="mb-5">
            <label htmlFor="hospital" className="block mb-4 text-xl font-Semibold text-White">Hospital</label>
            <input
              type="text"
              id="hospital"
              className="bg-White border border-White text-Blue font-montserratAlternate font-Regular text-lg rounded-xl block mx-auto w-full p-3"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              required />
          </div>
          <div className="mb-5">
            <label htmlFor="modalidad" className="block mb-4 text-xl font-Semibold text-White">Modalidad</label>
            <select
              name="modalidad"
              id="modalidad"
              className="bg-White border border-White text-Blue font-montserratAlternate font-Regular text-lg rounded-xl block mx-auto w-full p-3"
              value={modalidad}
              onChange={(e) => setModalidad(e.target.value)}>
              <option
                value="presencial"
                defaultValue>Presencial</option>
              <option
                value="virtual">Virtual</option>
            </select>
          </div>
          <button
            type="submit"
            className=" font-montserrat font-Semibold text-White text-2xl border-solid border-2 border-White  hover:bg-gradient-to-r hover:from-Green to-Blue focus:ring-4 focus:outline-none focus:ring-Green rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
            value={btnSubmitText}>{btnSubmitText}</button>
        </form>
      </div>
    </div>
  )
}

export default HomeFormView