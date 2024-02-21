import InfoItem from "./InfoItem";



const InfoCard = ({ title, subTitle, paragraph, itemsInformation, ...connection }) => {

    return (
        <div>
            <h2 className="text-4xl font-montserrat font-Bold mb-1 text-White desktop:text-5xl">{title}</h2>
            <h3 className="text-xl font-montserrat font-Bold mb-1 text-White desktop:text-2xl">{subTitle}</h3>
            <div className=" py-4 mb-4">
                <p className="font-montserratAlternate font-Regular text-base desktop:text-lg text-White">{paragraph}</p>
            </div>
            <ul className="flex flex-col justify-center items-start">
                {
                    itemsInformation.map((item, index) => (
                        <InfoItem
                            key={index}
                            {...item}
                        />
                    ))
                }
                {
                    <li className="flex items-start gap-2 mb-3">
                    <connection.iconInfo
                        color='#2FCE91'
                        width='25px'
                        height='25px'
                    />
                    
                    <div className='flex flex-col items-start justify-start text-White font-montserratAlternate font-Regular text-sm desktop:text-base'>
                        <p>{connection.textInfo}</p>
                        <p><span className='font-Semibold'>{`${connection.type.presencial.title}:`}</span> {`${connection.type.presencial.text}`}</p>
                        <p><span className='font-Semibold'>{`${connection.type.virtual.title}:`}</span> {`${connection.type.virtual.text}`}</p>
                    </div>
                </li>
                }

            </ul>
        </div>
    )
}

export default InfoCard