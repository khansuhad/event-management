import { useEffect, useState } from "react";
import Cart from "./Cart";


const Carts = () => {
    const [cart, setCart] = useState();

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cartItem')) || [];
        setCart(cartData)
    },[])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-[10%] my-20">
            {
                cart?.map((data , idx ) => <Cart key={idx} data={data}></Cart> )
            }
        </div>
    );
};

export default Carts;