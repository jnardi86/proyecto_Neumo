import HomeFormView from "../components/homeForm/view/HomeFormView"
import HomeHeaderView from "../components/homeHeader/view/HomeHeaderView"
import HomeInfoView from "../components/homeInfo/views/HomeInfoView"
import SpeakerView from "../components/homeSpeakers/view/SpeakerView"
import SponsorsView from "../components/homeSponsors/view/SponsorsView"




const HomeView = () => {

    

    return (
        <>
            <HomeHeaderView />
            <HomeInfoView />
            <SpeakerView />
            <HomeFormView />
            <SponsorsView />
        </>
    )
}

export default HomeView