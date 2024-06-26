import Banner from "../components/Banner/Banner";
import Category from "../components/Catrgory/Category";
import PopularItem from "../components/PopularItem/PopularItem";
import FeaturedItem from "../components/FeaturedItem/FeaturedItem";
import Testimonial from "../components/Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <div className="max-w-7xl mx-auto px-5 md:px-0">
                <Category />
                <PopularItem/>
            </div>
                <FeaturedItem/>
                <Testimonial/>
        </div>
    );
};

export default Home;