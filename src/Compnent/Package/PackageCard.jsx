

const PackageCard = ({packages}) => {
 const {title , button , description} = packages
    return (
        <div>
           <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="image"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"> {title} </h2>
    <p>  {description} </p>
    <div className="card-actions">
      <button className="btn btn-primary"> {button} </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default PackageCard;