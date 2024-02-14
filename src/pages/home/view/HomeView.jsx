import HomeFormView from "../components/homeForm/view/HomeFormView"
import HomeHeaderView from "../components/homeHeader/view/HomeHeaderView"
import HomeInfoView from "../components/homeInfo/views/HomeInfoView"



const HomeView = () => {

    return (
        <>
            <div className="flex flex-col ">
                <HomeHeaderView />
                <HomeInfoView />
                <HomeFormView />
            </div>
        </>
    )
}

export default HomeView