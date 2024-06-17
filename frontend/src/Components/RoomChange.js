import React,{useState} from 'react'

function RoomChange() {

  const [currentRoom, setCurrentRoom] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic
    // For simplicity, we'll just log the values to the console
    console.log('Current Room:', currentRoom);
    console.log('Reason:', reason);
    // You can add further logic like sending data to an API, etc.
    // Reset form fields after submission
    setCurrentRoom('');
    setReason('');
  };

  return (
    <div className="bg-white py-10 px-5 sm:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-teal-500 mb-6">
          Room Change Requests
        </h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="currentRoom" className="block text-lg font-medium text-gray-800 mb-1">Current Room</label>
            <input
              type="text"
              id="currentRoom"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your current room number"
              value={currentRoom}
              onChange={(e) => setCurrentRoom(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="reason" className="block text-lg font-medium text-gray-800 mb-1">Reason for Room Change</label>
            <textarea
              id="reason"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              rows="4"
              placeholder="Please provide a brief reason for your room change request"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 px-4 rounded-md font-semibold hover:bg-indigo-600 transition duration-300"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  )
}

export default RoomChange