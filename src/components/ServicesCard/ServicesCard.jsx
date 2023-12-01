import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServicesCard = ({data}) => {
    const { id,image,title,shortDescription} = data;
    // console.log(image)
    return (
        <div id='our-services' className='h-fit'>
            <div className="card  bg-base-100 shadow-xl">
  <figure className='h-52 '><img src={image} alt="cardimage" className='h-52 w-full' /></figure>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
    <p className='h-20'>{shortDescription}</p>
    <div className=" ">
      <Link to={`/cartdetails/${id}`} className="btn btn-primary">Show Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServicesCard;
ServicesCard.propTypes = {
    data: PropTypes.node,
}