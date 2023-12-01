
 import { HiCheck  } from "react-icons/hi";
 import { SlCalender  } from "react-icons/sl";
const UpcomingEvent = () => {

    return (
        <div className="px-[10%] my-40" id="upcoming-event" data-aos="fade-down-right">
            <h1 className="text-left text-5xl font-bold text-gray-400 my-4"><span className="text-red-700">Svent</span> Upocoming Events</h1>
            <p className="font-semibold text-xl">We make your events smart & impactful by personalised event management services.</p>

            <div className="grid lg:grid-cols-2 my-5 gap-10">
                <div className=' rounded '>
                    <figure className="rounded">
                    <img src='https://i.ibb.co/YczmL2x/13038-Musical-theatre-students-performing.jpg'  className='w-'/>
                    </figure>
                </div>
                <div>
                    <h1 className="font-bold text-xl my-4">Dance Event</h1>
                    <p className="text-lg  font-extralight text-gray-500 "> Get ready to groove and move at our electrifying Dance Extravaganza! Join us for a night of rhythm, energy, and pure entertainment as talented dancers from around the world come together to dazzle you with their breathtaking performances. From hip-hop to ballet, contemporary to salsa, our event showcases a diverse range of dance styles that will leave you spellbound.

                    Whether you are a seasoned dancer or just looking for a night of fun, our Dance Extravaganza promises an unforgettable experience. Do not miss the chance to witness the magic of dance come alive on stage!</p>

                    <div className='flex items-center  gap-2 mt-10 text-xl text-orange-400'>
                    <HiCheck></HiCheck> <span>California , USA</span>
                    
                                        </div>
                    <div className='flex items-center  gap-2 my-1 text-xl text-orange-400'>
                    <SlCalender></SlCalender> <span> Dec 3, 2023 , 10 AM to 05 PM</span>
                    
                                        </div>
                </div>
            </div>
            
        </div>
    );
};

export default UpcomingEvent;