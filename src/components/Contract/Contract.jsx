import { MdOutlineAlternateEmail } from 'react-icons/md';
const Contract = () => {
    return (
        <div className="my-20">
            <h1 className="text-5xl font-bold text-gray-800 text-center">Contract Us</h1>
            <p className="text-2xl font-medium text-gray-600 text-center lg:px-[20%] mt-5">You can send me an email through this form or you can directly contact me through those links. I’m less active on social media so try to send me an email.</p>
            <div className="grid lg:grid-cols-2 gap-10 lg:mx-[10%] lg:border lg:border-[#1F4172] rounded my-10">
           
               <div className='bg-[rgb(193,216,195)] text-[#1F4172] py-20 p-10  lg:px-40 w-[90%] mx-auto lg:mx-0'>
                    <div className='flex items-center  gap-3 my-3'>
                        <MdOutlineAlternateEmail className='text-3xl'></MdOutlineAlternateEmail>
                        <div className='text-left'>
                            <p className='text-2xl font-bold'>Email</p>
                            <h1>Svent1234@gmail.com</h1>
                        </div>
                    </div>
                    <div className='flex items-center  gap-3 my-3'>
                        <MdOutlineAlternateEmail className='text-3xl'></MdOutlineAlternateEmail>
                        <div className='text-left'>
                            <p className='text-2xl font-bold'>Address</p>
                            <h1>New York , USA </h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 my-3'>
                        <MdOutlineAlternateEmail className='text-3xl'></MdOutlineAlternateEmail>
                        <div className='text-left'>
                            <p className='text-2xl font-bold'>Phone</p>
                            <h1>+005452522</h1>
                        </div>
                    </div>
                </div>
                <div className='lg:p-10 p-5'>
                    <h1 className='font-bold text-3xl flex justify-center my-3 text-blue-500'>Send message from here</h1>
                <input type="text" placeholder="name" className="input input-bordered input-info w-full  " />
                <input type="text" placeholder="your email" className="input input-bordered input-info w-full  mt-5" />
                <input type="text" placeholder="subject" className="input input-bordered input-info w-full  my-5" />
                <br></br>
                <textarea className="textarea textarea-accent mb-5 w-96" placeholder="Message"></textarea>
                <br></br>
                    <button className='btn btn-secondary px-10'>Send</button>
                </div>
               </div>
            </div>
        
    );
};

export default Contract;