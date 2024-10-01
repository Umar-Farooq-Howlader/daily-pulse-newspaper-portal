import Banner from "../Banner/Banner";
import Plans from "../Plans/Plans";
import Publishers from "../Publishers/Publishers";
import Statistics from "../Statistics/Statistics";
import SubscriptionBanner from "../SubscriptionBanner/SubscriptionBanner";

const Home = () => {
    return (
        <div className="relative">
            <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">

            <SubscriptionBanner></SubscriptionBanner>
            </div>
            <Banner></Banner>
            <Publishers></Publishers>
            <Statistics></Statistics>
            <Plans></Plans>
        </div>
    );
};

export default Home;