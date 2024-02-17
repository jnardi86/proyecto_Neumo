import Footer from "../../../components/footer/Footer"
import HomeFormView from "../components/homeForm/view/HomeFormView"
import HomeHeaderView from "../components/homeHeader/view/HomeHeaderView"
import HomeInfoView from "../components/homeInfo/views/HomeInfoView"



const HomeView = () => {

    return (
        <>
                <HomeHeaderView />
                <HomeInfoView />
                <HomeFormView />
        </>
    )
}

export default HomeView