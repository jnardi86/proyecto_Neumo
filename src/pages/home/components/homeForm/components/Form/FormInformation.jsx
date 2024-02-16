import User from "../../../../../../components/svg/User";
import Computer from "../../../../../../components/svg/Computer";


const FormInformation = ({ isToggled }) => {



    return (
        <div className="max-w-2xl mx-auto mb-10 desktop:w-1/2 desktop:flex desktop:flex-col desktop:justify-center desktop:items-start">
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
    )
}

export default FormInformation