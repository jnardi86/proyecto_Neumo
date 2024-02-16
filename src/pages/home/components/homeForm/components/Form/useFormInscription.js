import { useState } from "react"


const useFormInscription = () => {

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

        return {
            name,
            setName,
            lastName,
            setLastName,
            email,
            setEmail,
            hospital,
            setHospital,
            modalidad,
            setModalidad,
            isToggled,
            setIsToggled,
            btnSubmitText,
            setBtnSubmitText,
            handleSubmit,
            onToggle
        }
}

export default useFormInscription;


