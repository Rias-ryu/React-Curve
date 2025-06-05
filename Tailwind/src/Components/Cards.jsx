import React from 'react'

function Cards({username = "AP"}) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-violet-400 p-6">
      <img
        className="w-full h-64 object-cover rounded-xl"
        src="https://images.pexels.com/photos/28681307/pexels-photo-28681307/free-photo-of-couple-admiring-scenic-mountain-view-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Card"
      />
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-800"></h2>
        <p className="text-sm text-gray-700 mb-1">Posted by <span className="font-semibold">{username}</span></p>
        <p className="text-gray-600">
          This is a simple card component using props for dynamic data.
        </p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}


export default Cards