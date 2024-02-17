import Calendar from "../../components/svg/Calendar"
import MedicalCard from "../../components/svg/MedicalCard"



const useData = () => {

    const itemsInformation = [
        {
            textInfo: 'Jueves 4 de abril',
            iconInfo: Calendar,
        },
        {
            textInfo: 'Jueves 4 de abril',
            iconInfo: Calendar,
        },
        {
            textInfo: 'Jueves 4 de abril',
            iconInfo: Calendar,
        },
        {
            textInfo: 'Modalidad',
            iconInfo: Calendar,
            type: {
                virtual: 'Virtual',
                Presencial: 'Presencial',
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