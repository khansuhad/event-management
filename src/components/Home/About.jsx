

const About = () => {
    const bgImage = {
        backgroundImage: `url(https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/bg-1-3.jpg)`,
      };
    return (
        <div className="my-10" id="about" data-aos="zoom-out-up">
            <div style={bgImage} className=" h-60 mb-10 flex items-center justify-center text-center">
                    <h1 className="text-7xl">Who We Are</h1>
            </div>

            <div className="my-20">
                <h1 className="text-gray-500 text-5xl text-center">We <span className="text-red-600">Create Events </span>That Lasts</h1>
                <p className="text-xl px-[5%] lg:px-[20%] text-center my-5">From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, We offer full range of Events Management Services that scale to your needs & budget.</p>
            </div>
            <div className="px-[10%] grid  lg:grid-cols-3 gap-10 mb-20">
                <div className="flex text-center flex-col ">
           <figure className="rounded"> <img src="https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/5-2.jpg" alt="" className="h-60 w-full"/></figure>

            <h1 className="text-center my-5 text-3xl">Our Vision</h1>
            <p className=" text-center px-[10%] pb-5 ">Our vision is to be the catalyst for unforgettable moments. We aspire to set new standards in event management, delivering creativity, innovation, and excellence in every endeavor. We seek to inspire and transform events, creating memories that last a lifetime while continuously pushing the boundaries of what is possible in the world of event planning.</p>
                </div>
                <div className="flex text-center flex-col  ">
           <figure className="rounded"> <img src="https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/6-2.jpg" alt="" className="h-60 w-full"/></figure>

            <h1 className="text-center my-5 text-3xl">Our Approach</h1>
            <p className=" text-center px-[10%] ">Our approach begins with a deep understanding of our clients unique needs, objectives, and vision. We believe in active collaboration, ensuring that every event we plan is a true reflection of our clients aspirations.</p>
                </div>
                <div className="flex text-center flex-col  ">
           <figure className="rounded"> <img src="https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/7-2.jpg" alt="" className="h-60 w-full"/></figure>

            <h1 className="text-center my-5 text-3xl">Our Goal</h1>
            <p className=" text-center px-[10%] ">The primary goal should be to consistently exceed client expectations by delivering outstanding event experiences. High client satisfaction can lead to repeat business and positive referrals.</p>
                </div>
              
               
            </div>
        </div>
    );
};

export default About;