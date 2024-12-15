
const Form = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-6 w-96 shadow-blue-900 shadow-lg ">
          <h2 className="text-lg font-bold mb-4 text-blue-900 text-center font-serif">Add Event</h2>

          <p className="mb-2 text-blue-900 font-bold">Name</p>


          <input
            type="text"
            placeholder="Your name"
          
            className="w-full bg-white p-2 mb-2 border border-blue-900 rounded-md"
          />

<p className="mb-2 text-blue-900 font-bold">Email</p>
          <input
            type="email"
           
            className="w-full bg-white border p-2 mb-2 border-blue-900 rounded-md"
          />

<p className="mb-2 text-blue-900 font-bold">Number</p>
          <input
            type=""
            
            className="w-full bg-white border p-2 mb-2 border-blue-900 rounded-md"
          />


<p className="mb-2 text-blue-900 font-bold">Special request</p>
          <textarea
            placeholder="Special request (optional)"
           
            className="w-full bg-white border p-2 mb-4 border-blue-900 rounded-md"
          ></textarea>
          <button
           
            className="bg-blue-900 text-white px-4 py-2 rounded mr-2 font-serif"
          >
            Save
          </button>
          <button
           
            className="bg-gray-300 text-blue-900 px-4 py-2 rounded  font-serif"
          >
            Cancel
          </button>
        </div>
      </div>
    );
};

export default Form;