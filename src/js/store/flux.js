const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [
        {
          id: 1,
          name: "Laura R. Elrod",
          homeAddress: "40, Rue Roussy",
          phone: "(581) 377-4911",
          email: "laura.ullrich@pegasse.biz",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80",
        },
        {
          id: 2,
          name: "Cyrilla van Neer",
          homeAddress: "Ctra. de la Puerta",
          phone: "(750) 637-4942",
          email: "cyrillavanNeer@rhyta.com",
          image:
            "https://cdn.pixabay.com/photo/2016/11/14/04/25/umbrella-1822586_1280.jpg",
        },
        {
          id: 3,
          name: "Deepak Doekhi",
          homeAddress: "Ctra. Bailén-Motril",
          phone: "(905) 797-9241",
          email: "deepakDoekhi@teleworm.us",
          image:
            "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1448&q=80",
        },
        {
          id: 4,
          name: "Shania Pastor",
          homeAddress: "Kinderdijkstraat 36",
          phone: "(403) 06-53306",
          email: "ShaniaPastor@dayrep.com",
          image:
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
      ],
    },
    actions: {
      // Otras acciones...
      startEditing: (contactId) => {
        const store = getStore();
        const contacts = store.contacts.map((contact) => {
          if (contact.id === contactId) {
            return { ...contact, isEditing: true };
          } else {
            return contact;
          }
        });
        setStore({ contacts });
      },
      cancelEditing: (contactId) => {
        const store = getStore();
        const contacts = store.contacts.map((contact) => {
          if (contact.id === contactId) {
            return { ...contact, isEditing: false };
          } else {
            return contact;
          }
        });
        setStore({ contacts });
      },
      saveEditedContact: (editedContact) => {
        const store = getStore();
        const contacts = store.contacts.map((contact) => {
          if (contact.id === editedContact.id) {
            return editedContact;
          } else {
            return contact;
          }
        });
        setStore({ contacts });
      },
    },
  };
};

export default getState;
