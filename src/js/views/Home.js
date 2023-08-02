import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Card from "../component/Card";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <div className="mt-5 ">
      {store.contacts.map((contact) => (
        <div key={contact.id} className="col-12 mb-4">
          <Card contact={contact} />
        </div>
      ))}
    </div>
  );
};
