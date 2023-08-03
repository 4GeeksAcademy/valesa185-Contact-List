import React, { useContext } from "react";
import { Context } from "../store/appContext";
import EditContact from "../views/EditContact";

const Card = ({ contact }) => {
  const { store, actions } = useContext(Context);

  const handleEditClick = () => {
    actions.startEditing(contact.id);
  };

  const handleDeleteClick = () => {
    actions.deleteContact(contact.id);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card mb-3" style={{ maxWidth: "1000px" }}>
        <div className="row ">
          <div className="col-md-4">
            <img
              src={contact.image}
              className="img-fluid rounded-start"
              alt={contact.name}
            />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">{contact.name}</h5>
              <p className="card-text">
                <strong>📍 Home Address:</strong> {contact.homeAddress}
              </p>
              <p className="card-text">
                <strong>📞 Phone number:</strong> {contact.phone}
              </p>
              <p className="card-text">
                <strong> 📨 email: </strong>
                {contact.email}
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column mt-4 ">
            {!contact.isEditing ? (
              <>
                <button
                  type="button"
                  className="btn btn-primary mt-3 me-4"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger mt-3 me-4"
                  onClick={handleDeleteClick}
                >
                  Delete
                </button>
              </>
            ) : (
              <EditContact contact={contact} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
