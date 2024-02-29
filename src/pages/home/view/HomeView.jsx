import HomeFormView from "../components/homeForm/view/HomeFormView"
import HomeHeaderView from "../components/homeHeader/view/HomeHeaderView"
import HomeInfoView from "../components/homeInfo/views/HomeInfoView"
import HomePresentationView from "../components/homePresentation/view/HomePresentationView"
import SpeakerView from "../components/homeSpeakers/view/SpeakerView"
import SponsorsView from "../components/homeSponsors/view/SponsorsView"




const HomeView = () => {

    

    return (
        <>
            <HomeHeaderView />
            <HomePresentationView/>
            <HomeInfoView />
            <SpeakerView />
            <HomeFormView />
            <SponsorsView />
        </>
    )
}

export default HomeView