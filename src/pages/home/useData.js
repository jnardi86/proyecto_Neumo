import Calendar from "../../components/svg/Calendar"
import MedicalCard from "../../components/svg/MedicalCard"
import Time from "../../components/svg/Time"
import Location from "../../components/svg/Location"
import Connection from "../../components/svg/Connection"
import speaker1 from "../../assets/speakers/speaker_1.jpg"

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

            name: "Dra. Laura Gómez",
            speciality: "Neumonología",
            review: "Experta en enfermedades respiratorias. Ha dedicado su carrera a mejorar la calidad de vida de pacientes con asma.",
            image: speaker1,
        },
        {
            name: "Dr. Roberto López",
            speciality: "Alergología",
            review: "Especialista en alergias respiratorias. Su investigación ha contribuido al avance en el tratamiento del asma alérgica.",
            image: speaker1,
        },
        {
            name: "Lic. Ana Martínez",
            speciality: "Educación en Salud",
            review: "Educadora en salud respiratoria. Trabaja para concientizar a la comunidad sobre la importancia del manejo adecuado del asma.",
            image: speaker1,
        },
        {
            name: "Dr. Carlos Sánchez",
            speciality: "Investigación Médica",
            review: "Investigador médico enfocado en descubrir nuevas terapias para el tratamiento del asma. Sus contribuciones son reconocidas a nivel internacional.",
            image: speaker1,
        },
        {
            name: "Dra. María Rodríguez",
            speciality: "Pediatría",
            review: "Pediatra con experiencia en asma infantil. Trabaja para mejorar el diagnóstico y tratamiento del asma en niños.",
            image: speaker1,
        },
        {
            name: "Lic. Juan Pérez",
            speciality: "Psicología de la Salud",
            review: "Psicólogo especializado en el impacto psicológico del asma. Ayuda a pacientes a manejar el estrés asociado con la enfermedad.",
            image: speaker1,
        },
    ]

return {
    itemsInformation,
    itemsHospitals,
    speakers
}
}

export default useData;