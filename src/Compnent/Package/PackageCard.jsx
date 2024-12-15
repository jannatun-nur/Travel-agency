import { useState } from "react";
import Form from "../Form/Form";


const PackageCard = ({packages}) => {
 const {title , button , description} = packages


 const [showForm, setShowForm] = useState(false);

 // Function to toggle form visibility
 const handleBookNow = () => {
   setShowForm(true);
 };

 const handleCloseForm = () => {
   setShowForm(false);
 };
    return (
        <div>
           <div className="card bg-gray-200 shadow-2xl shadow-blue-900">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="image"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-blue-900"> {title} </h2>
    <p className="text-gray-800">  {description} </p>
    <div className="card-actions ">
      <button 
      onClick={handleBookNow}
      className="lg:px-5 lg:py-2 rounded-bl-xl bg-gradient-to-r from-cyan-600 to-blue-900
      text-white"> {button} </button>
    </div>
  </div>
</div>


{/* Show Form when 'showForm' is true */}
{showForm && <Form onClose={handleCloseForm} />}
        </div>
    );
};

export default PackageCard;