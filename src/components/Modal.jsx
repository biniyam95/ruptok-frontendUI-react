import React, { useState } from "react";
import "../styles/Modal.css";

function Modal({ closeModel, handleSubmittedData }) {
  const [newUser, setNewUser] = useState({
    firstName: "",
    email: "",
    phone: "",
    id: "",
  });

  // Handling onchange for all fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevNewUser) => ({ ...prevNewUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Added user:", newUser);
    handleSubmittedData(newUser);

    closeModel();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full md:w-96 p-8 bg-white text-black rounded-lg shadow-md z-50 ">
        <div className="flex justify-between mb-6">
          <div className="modal-heading">Add New Customer</div>
          <div
            className="text-pink-500 text-lg font-bold rounded-full cursor-pointer"
            onClick={closeModel}
          >
            X
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Name  */}
          <div className="mb-4">
            <label htmlFor="name" className="modal-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="firstName"
              value={newUser.firstName}
              className="modal-fields"
              placeholder="Enter first name"
              onChange={handleInputChange}
            />
          </div>
          {/* email  */}
          <div className="mb-4">
            <label htmlFor="email" className="modal-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={newUser.email}
              className="modal-email-input "
              placeholder="Enter email ID"
              onChange={handleInputChange}
            />
          </div>
          {/* phone */}
          <div className="mb-4">
            <label htmlFor="phone" className="modal-label">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={newUser.phone}
              className="modal-fields"
              placeholder="Enter Phone number"
              onChange={handleInputChange}
            />
          </div>

          {/* customer id */}
          <div className="mb-4">
            <label htmlFor="customerID" className="modal-label">
              Customer ID
            </label>
            <input
              type="number"
              id="customerId"
              name="id"
              value={newUser.id}
              className="modal-fields "
              placeholder="Enter unique ID for customer"
              onChange={handleInputChange}
            />
          </div>

          {/* Submit button */}
          <div className="flex justify-end">
            <button type="submit" className="modal-addUser">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
