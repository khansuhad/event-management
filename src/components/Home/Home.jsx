import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ServicesCard from "../ServicesCard/ServicesCard";
import UpcomingEvent from "./UpcomingEvent";
import About from "./About";


const Home = () => {
    const servicesData = useLoaderData();
    // console.log(servicesData)
    
    return (
        <div>
            <Banner></Banner>
          <div className="px-[10%] my-8">
            <h1 className="text-3xl font-bold text-center my-5" data-aos="fade-up-right">Our Services</h1>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 " data-aos="fade-up-left">
           {
                servicesData?.map(data => <ServicesCard key={servicesData?.id} data={data}></ServicesCard>)
            }
           </div>
          </div>
          <UpcomingEvent></UpcomingEvent>
          <About></About>
        </div>
    );
};

export default Home;