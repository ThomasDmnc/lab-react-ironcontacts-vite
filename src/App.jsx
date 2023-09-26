import { useState } from "react";
import "./App.css";
import contactsJson from './contacts.json'

function App() {
  const [contacts, SetContacts] = useState(contactsJson.slice(0,5));

  const addContact = () => {
    const filterArr = contactsJson.filter((element) => !contacts.includes(element));
    const randomIndex = Math.floor(Math.random * filterArr.length);
    contacts.push(filterArr[randomIndex]);
    SetContacts(contacts);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

    <button onClick={addContact} > Add a new contact.</button>  

      <table>
        <thead>
        <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
            {contacts.map((contact) => {
              return (
                <tr key={contact.id} >
                  <td> <img src={contact.pictureUrl} style={{height: 150}} /> </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>{contact.wonOscar ? "🏆": ""}</td>
                  <td>{contact.wonEmmy ? "🏆": ""}</td>
                </tr>
              )})
            }
        </tbody>
      </table>
    </div>
  );
}

export default App;
