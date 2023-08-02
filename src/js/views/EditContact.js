import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const EditContact = ({ contact }) => {
  const { actions } = useContext(Context);
  const [editedContact, setEditedContact] = useState({
    ...contact,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    actions.saveEditedContact(editedContact);
  };

  const handleCancel = () => {
    actions.cancelEditing(contact.id);
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={editedContact.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="homeAddress" className="form-label">
            Home Address
          </label>
          <input
            type="text"
            className="form-control"
            id="homeAddress"
            name="homeAddress"
            value={editedContact.homeAddress}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={editedContact.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={editedContact.email}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary me-4 mb-3"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-secondary mb-3"
          onClick={handleCancel}
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default EditContact;
