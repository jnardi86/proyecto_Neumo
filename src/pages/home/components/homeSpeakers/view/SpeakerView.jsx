import SpeakerCarousel from "../components/speakerCard/SpeakerCarousel"


const SpeakerView = () => {
  return (
    <div className="w-full mx-auto mb-40 flex flex-col bg-Blue group desktop:hover:bg-Green rounded-xl shadow-md md:h-[730px]">
      <div className="w-full text-center p-5">
        <h2 className='font-montserrat font-Bold text-5xl mb-10 text-White desktop:group-hover:text-Blue'>ORADORES</h2>
      </div>
      <SpeakerCarousel />
    </div>
  )
}

export default SpeakerView