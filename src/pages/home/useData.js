import Calendar from "../../components/svg/Calendar"
import MedicalCard from "../../components/svg/MedicalCard"
import Time from "../../components/svg/Time"
import Location from "../../components/svg/Location"
import Connection from "../../components/svg/Connection"

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
                    title:'Virtual',
                    text: 'Aula 4to piso, Hospital Santojanni.'
                },
                presencial: {
                    title:'Presencial',
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

    return {
        itemsInformation,
        itemsHospitals
    }
}

export default useData;