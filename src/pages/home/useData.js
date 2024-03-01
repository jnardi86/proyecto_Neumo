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
import Dr_Fernando_Saldarini_PS from "../../assets/speakers/Dr_Fernando_Saldarini_PS.jpg"

import elea from "../../assets/logos/ELEA_PS.jpg"
import cassara from "../../assets/logos/CASSARA_PS.jpg"
import casasco from "../../assets/logos/CASASCO_PS.jpg"

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
            textInfo: 'Hospital Santojanni, Pilar 950 - 4to Piso, CABA',
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
            name: "Dr. Daniel Colodenco",
            speciality: "",
            image: Dr_Daniel_Colodenco_PS,
            review: "Ex-Jefe de Alergia e Inmunología Hospital María Ferrer | Director de la Carrera de Especialistas en Neumonología UBA  Ex-Presidente de la Asociación Argentina de Medicina Respiratoria (AAMR)",
        },
        {
            name: "Dr. Martin Sívori",
            speciality: "",
            review: "Jefe Unidad Neumotisiología Hospital Ramos Mejía | Director carrera especialista neumonología UBA",
            image: Dr_Martin_Sívori_PS,
        },
        {
            name: "Dra. Valeria Brichetti",
            speciality: "",
            review: "Médica de planta del servicio de neumotisiologia Hospital Santojanni | Consultorio de asma grave Hospital Santojanni",
            image: Dra_Valeria_Brichetti_PS,
        },
        {
            name: "Dr. Daniel Pascansky",
            speciality: "",
            review: "Médico de planta de neumotisiologia Hospital Ramos Mejia | Subdirector de la Carrera de Especialista UBA ",
            image: Dr_Daniel_Pancasky_PS,
        },
        {
            name: "Dr. Diego Litewka",
            speciality: "",
            review: "Jefe Sección Neumotisiologia Hospital Fernandez",
            image: Dr_Diego_Litewka_PS,
        },
        {
            name: "Dr. Jose María Malet Ruiz",
            speciality: "",
            review: "Jefe de Unidad Investigación Clínica y Experimental. Hospital de Rehabilitación Respiratoria María Ferrer",
            image: Dr_Jose_Malet_PS,
        },
        {
            name: "Dr. Marcos Hernandez",
            speciality: "",
            review: "Médico de planta Sanatorio Güemes | Coordinador consultorio de asma grave Sanatorio Güemes",
            image: Dr_Marcos_Hernandez_PS,
        },

        {
            name: "Dr. Ricardo del Olmo",
            speciality: "",
            review: "Jefe de Servicio de Diagnóstico y Tratamiento Hospital María Ferrer & Investigador IDIM",
            image: Dr_Ricardo_del_Olmo_PS,
        },
        {
            name: "Dra. Laura Orazi",
            speciality: "",
            review: "Médica de planta Neumonología Hospital Italiano Buenos Aires | Consultorio Asma grave Hospital Italiano Buenos Aires | Subcoordinadora sección trasplante Pulmonar AAMR | Coordinadora laboratorio pulmonar Hospital Italiano Buenos Aires",
            image: Dra_Laura_Orazi_PS,
        },
        {
            name: "Dr. Fernando Saldarini",
            speciality: "",
            review: "Jefe Unidad Neumotisiología Hospital Santojanni | Director adscripto carrera especialista neumonología UBA",
            image: Dr_Fernando_Saldarini_PS,
        },
    ]

    const logos = [
        {
            image: elea,
        },
        {
            image: cassara,
        },
        {
            image: casasco
        }
    ]

    return {
        itemsInformation,
        itemsHospitals,
        speakers,
        logos
    }
}

export default useData;