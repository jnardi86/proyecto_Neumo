import HomeFormView from "../components/homeForm/view/HomeFormView"
import HomeHeaderView from "../components/homeHeader/view/HomeHeaderView"
import HomeInfoView from "../components/homeInfo/views/HomeInfoView"
import SpeakerCard from "../components/homeSpeakers/components/speakerCard/SpeakerCard"
import SpeakerView from "../components/homeSpeakers/view/SpeakerView"



const HomeView = () => {

    return (
        <>
            <HomeHeaderView />
            <HomeInfoView />
            <SpeakerView />
            <HomeFormView />
        </>
    )
}

export default HomeView