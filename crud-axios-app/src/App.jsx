import api from './api/contacts';
import { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';

function App() {
  const [contacts, setContacts] = useState([]);

  // Retrieve contacts from api
  const retrieveContacts = async () => {
    const response = await api.get('/contacts');
    return response.data;
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);

  return (
    <>
      <div>
        <h1>Dados do API</h1>
        <ul>
          {contacts.map((item, index) => (
            <li key={index}>
              {item.id} - {item.name} - {item.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
