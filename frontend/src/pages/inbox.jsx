import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Edit, Trash } from 'lucide-react'; // Icons for Update & Delete

const Inbox = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('/api/contacts');
        setContacts(response.data);
      } catch (err) {
        setError('Failed to fetch contact messages');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/contact/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id));
    } catch (err) {
      setError('Failed to delete contact');
    }
  };

//   const handleUpdate = async (id) => {
//     const newFirstName = prompt("Enter new first name:");
//     if (!newFirstName) return;
//     try {
//       const response = await axios.put(`/api/update-contact/${id}`, { firstName: newFirstName });
//       setContacts(contacts.map(contact => contact._id === id ? response.data : contact));
//     } catch (err) {
//       setError('Failed to update contact');
//     }
//   };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Inbox</h2>
      {loading && <p>Loading messages...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="bg-white shadow-md rounded p-4">
        {contacts.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          <ul>
            {contacts.map((contact) => (
              <li key={contact._id} className="border-b p-2 flex justify-between items-center">
                <div>
                  <p className="font-semibold">{contact.firstName} {contact.lastName}</p>
                  <p className="text-gray-600">{contact.email} - {contact.phone}</p>
                  <p className="text-gray-800 mt-1">{contact.message}</p>
                </div>
                <div className="flex space-x-3">
                  {/* <button onClick={() => handleUpdate(contact._id)} className="text-blue-500">
                    <Edit className="w-5 h-5" />
                  </button> */}
                  <button onClick={() => handleDelete(contact._id)} className="text-red-500">
                    <Trash className="w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Inbox;
