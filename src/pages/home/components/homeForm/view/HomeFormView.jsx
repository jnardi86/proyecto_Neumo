
import FormInscription from "../components/Form/FormInscription";
import useFormInscription from "../components/Form/useFormInscription";
import FormInformation from "../components/Form/FormInformation";



const HomeFormView = () => {

  const {
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    hospital,
    setHospital,
    isToggled,
    btnSubmitText,
    handleSubmit,
    onToggle
  } = useFormInscription();


  return (
    <div className='mb-40 desktop:flex'>
      <FormInformation
        isToggled={isToggled}
      />
      <FormInscription
        name={name}
        setName={setName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        hospital={hospital}
        setHospital={setHospital}
        isToggled={isToggled}
        btnSubmitText={btnSubmitText}
        handleSubmit={handleSubmit}
        onToggle={onToggle}
      />
    </div>
  )
}

export default HomeFormView