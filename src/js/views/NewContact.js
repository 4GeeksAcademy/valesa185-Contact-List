import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const NewContact = () => {
  const { actions } = useContext(Context);
  const [newContact, setNewContact] = useState({
    name: "",
    homeAddress: "",
    phone: "",
    email: "",
    image: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleCreateContact = () => {
    actions.saveNewContact(newContact);
  };

  return (
    <div className="container mt-4">
      <h2>Create New Contact</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={newContact.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Home Address</label>
          <input
            type="text"
            className="form-control"
            name="homeAddress"
            value={newContact.homeAddress}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone number</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={newContact.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={newContact.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={newContact.image}
            onChange={handleInputChange}
          />
        </div>

        <Link to="/">
          <button className="btn btn-success me-3">Get Back to Contacts</button>
        </Link>
        <Link to="/">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleCreateContact}
          >
            Save New Contact
          </button>
        </Link>
      </form>
    </div>
  );
};
