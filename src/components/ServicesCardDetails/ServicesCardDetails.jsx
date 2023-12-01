import  { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from '../ErrorPage/ErrorPage';


const ServicesCardDetails = () => {
      // const [servicesData , setServicesData] = useState();
      const [data, setData] = useState();
      const id = useParams();
      const loadData = useLoaderData();
      // useEffect(() => {
      //     fetch('/services.json')
      //     .then( res => res.json())
      //     .then(data => setServicesData(data))
      // },[])
      
      useEffect(() => {
          const paramsData = loadData?.find(item => item?.id === Number(id?.paramsId));
          setData(paramsData);
          
      },[loadData , id?.paramsId]);
      
      const handleCart = () => {
        const addedCartArray = [];
        const cartItem = JSON.parse(localStorage.getItem("cartItem"));
        
        if(!cartItem){
            addedCartArray.push(data);
            localStorage.setItem("cartItem", JSON.stringify(addedCartArray));
            
            toast.success(`Added successfully `, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        else{
        
            const have = cartItem.find(e => e.id === data?.id );
            
            if(!have){
                addedCartArray.push(...cartItem, data)
                localStorage.setItem("cartItem", JSON.stringify(addedCartArray))
                toast.success("Successfully added", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                
            }
            else{
                
                toast.error("Already added", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
        }
        
    }
    console.log(id?.paramsId ,data)
    return (
        <div>
            { data !== undefined ? <div>
        <div className=" px-[10%] py-10  ">
     <figure className="w-full h-full image-overlay-container">
        <img src={data?.image} alt=""  className="w-full h-96"/>
      </figure>
     <div className='my-10'>
        <div className='lg:flex justify-between items-center'>
        <h1 className="font-bold text-3xl">{data?.title}</h1>
        <div className=''>
       
       <h1 className='font-bold text-2xl text-orange-500 md:text-center'>${data?.price}</h1>
       <button className='btn bg-red-500 text-white' onClick={handleCart}>Add To Cart </button>
       </div>
        
      
        </div>
        <p className="mt-10 text-xl lg:text-3xl text-gray-500 flex justify-center">{data?.description}</p>
       
     </div>
     
    </div>
    <ToastContainer />
    </div> :
    <ErrorPage></ErrorPage>}
        </div>
    );
};

export default ServicesCardDetails;