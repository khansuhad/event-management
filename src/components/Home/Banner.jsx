import image from '../../assets/banner.jpg'
const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${image})`,
      };
    return (
        <div className='mb-10'>
            <div className="hero min-h-screen" style={bannerStyle}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="" data-aos="fade-up">
      <h1 className="mb-5 text-5xl font-bold ">Elevate Your Events with Us</h1>
      <p className="mb-5 font-semibold">Welcome to the Ultimate Event Experience! Discover seamless event planning and management services that turn your vision into reality. From corporate conferences to intimate gatherings, our team of experts is here to make your event unforgettable. Lets create memories together!</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;