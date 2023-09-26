import { useState } from "react";
import "./App.css";
import contactsJson from './contacts.json'

function App() {
  const [contacts, SetContacts] = useState(contactsJson.slice(0,5));

  const addContact = () => {
    const filterArr = contactsJson.filter((element) => !contacts.includes(element));
    const randomIndex = Math.floor(Math.random() * filterArr.length);
    SetContacts(current => [...current, filterArr[randomIndex]] );
  };

  const sortPopularity = () => {
    const newArr = contacts.map((x) => x);
    newArr.sort(function(a, b) {
      return b.popularity - a.popularity;
    });
    SetContacts(newArr);
  };

  const sortName = () => {
    const newArr = contacts.map((x) => x);
    newArr.sort(function(a, b) {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA.localeCompare(nameB);
    });
    SetContacts(newArr);
  }; 

  // Remove contacts 
  function removeContact(value) {
    SetContacts(contacts.filter((t) => t.id !== value))
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

    <button onClick={addContact} > Add a new contact.</button>  
    <button onClick={sortName} > Sort contacts alphabetically </button>
    <button onClick={sortPopularity} > Sort contacts by popularity </button>

      <table>
        <thead>
        <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {contacts.map((contact) => {
              return (
                <tr key={contact.id} >
                  <td> <img src={contact.pictureUrl} style={{height: 150}} /> </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>{contact.wonOscar ? "🏆": ""}</td>
                  <td>{contact.wonEmmy ? "🏆": ""}</td>
                  <td><button onClick={() => removeContact(contact.id)}> Remove Contact</button> </td>
                </tr>
              )})
            }
        </tbody>
      </table>
    </div>
  );
}

export default App;
