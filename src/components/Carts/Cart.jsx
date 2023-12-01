import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cart = ({data}) => {
    const {id , image, price , title , shortDescription } = data || [] ;
    return (
        <div>
                   <div className="card  bg-base-100 shadow-xl ">
  <figure className='h-52 '><img src={image} alt="cardimage" className='h-52 w-full' /></figure>
  <div className="card-body">
    <h1 className='text-orange-500 text-2xl'>${price}</h1>
    <h2 className="text-xl">{title}</h2>
    <p>{shortDescription}</p>
    <div className="card-actions flex gap-5 justify-center">
      <Link to={`/cartdetails/${id}`} className="btn btn-primary">Show Details</Link>
      <button className='btn btn-secondary'>Order Now </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cart;
Cart.propTypes = {
    data: PropTypes.node,
}