import Calendar from "../../components/svg/Calendar"
import MedicalCard from "../../components/svg/MedicalCard"
import Time from "../../components/svg/Time"
import Location from "../../components/svg/Location"
import Connection from "../../components/svg/Connection"
import Dr_Daniel_Colodenco_PS from "../../assets/speakers/Dr_Daniel_Colodenco_PS.jpg"
import Dr_Daniel_Pancasky_PS from "../../assets/speakers/Dr_Daniel_Pancasky_PS.jpg"
import Dr_Diego_Litewka_PS from "../../assets/speakers/Dr_Diego_Litewka_PS.jpg"
import Dr_Jose_Malet_PS from "../../assets/speakers/Dr_Jose_Malet_PS.jpg"
import Dr_Marcos_Hernandez_PS from "../../assets/speakers/Dr_Marcos_Hernandez_PS.jpg"
import Dr_Martin_Sívori_PS from "../../assets/speakers/Dr_Martin_Sívori_PS.jpg"
import Dr_Ricardo_del_Olmo_PS from "../../assets/speakers/Dr_Ricardo_del_Olmo_PS.jpg"
import Dra_Laura_Orazi_PS from "../../assets/speakers/Dra_Laura_Orazi_PS.jpg"
import Dra_Valeria_Brichetti_PS from "../../assets/speakers/Dra_Valeria_Brichetti_PS.jpg"

const useData = () => {

    const itemsInformation = [
        {
            textInfo: 'Jueves 4 de abril',
            iconInfo: Calendar,
        },
        {
            textInfo: 'De 8 a 12:30hs',
            iconInfo: Time,
        },
        {
            textInfo: 'Hospital Santojanni, Pilar 950, CABA',
            iconInfo: Location,
        },
        {
            textInfo: 'Modalidad',
            iconInfo: Connection,
            type: {
                virtual: {
                    title: 'Virtual',
                    text: 'Aula 4to piso, Hospital Santojanni.'
                },
                presencial: {
                    title: 'Presencial',
                    text: 'Transmisión en vivo a través de Zoom.'
                },
            },
        },
    ]

    const itemsHospitals = [
        {
            hospitalName: 'Hospital Santojanni',
            icon: MedicalCard,
        },
        {
            hospitalName: 'Hospital Ramos Mejía',
            icon: MedicalCard,
        },
        {
            hospitalName: 'Hospital Fernandez',
            icon: MedicalCard,
        },
    ]

    const speakers = [
        {
            name: "Dra. Valeria Brichetti",
            speciality: "Neumonología",
            review: "Experta en enfermedades respiratorias. Ha dedicado su carrera a mejorar la calidad de vida de pacientes con asma.",
            image: Dra_Valeria_Brichetti_PS,
        },
        {
            name: "Dr. Daniel Colodenco",
            speciality: "Neumonología",
            review: "Experta en enfermedades respiratorias. Ha dedicado su carrera a mejorar la calidad de vida de pacientes con asma.",
            image: Dr_Daniel_Colodenco_PS,
        },
        {
            name: "Dr. Daniel Pancasky",
            speciality: "Alergología",
            review: "Especialista en alergias respiratorias. Su investigación ha contribuido al avance en el tratamiento del asma alérgica.",
            image: Dr_Daniel_Pancasky_PS,
        },
        {
            name: "Dr. Diego Litewka",
            speciality: "Educación en Salud",
            review: "Educadora en salud respiratoria. Trabaja para concientizar a la comunidad sobre la importancia del manejo adecuado del asma.",
            image: Dr_Diego_Litewka_PS,
        },
        {
            name: "Dr. Jose Malet",
            speciality: "Investigación Médica",
            review: "Investigador médico enfocado en descubrir nuevas terapias para el tratamiento del asma. Sus contribuciones son reconocidas a nivel internacional.",
            image: Dr_Jose_Malet_PS,
        },
        {
            name: "Dr. Marcos Hernandez",
            speciality: "Pediatría",
            review: "Pediatra con experiencia en asma infantil. Trabaja para mejorar el diagnóstico y tratamiento del asma en niños.",
            image: Dr_Marcos_Hernandez_PS,
        },
        {
            name: "Dr. Martin Sívori",
            speciality: "Psicología de la Salud",
            review: "Psicólogo especializado en el impacto psicológico del asma. Ayuda a pacientes a manejar el estrés asociado con la enfermedad.",
            image: Dr_Martin_Sívori_PS,
        },
        {
            name: "Dr. Ricardo del Olmo",
            speciality: "Psicología de la Salud",
            review: "Psicólogo especializado en el impacto psicológico del asma. Ayuda a pacientes a manejar el estrés asociado con la enfermedad.",
            image: Dr_Ricardo_del_Olmo_PS,
        },
        {
            name: "Dra. Laura Orazi",
            speciality: "Psicología de la Salud",
            review: "Psicólogo especializado en el impacto psicológico del asma. Ayuda a pacientes a manejar el estrés asociado con la enfermedad.",
            image: Dra_Laura_Orazi_PS,
        },
    ]

return {
    itemsInformation,
    itemsHospitals,
    speakers
}
}

export default useData;