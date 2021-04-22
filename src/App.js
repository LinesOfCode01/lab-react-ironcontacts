import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  let theContacts = [...contacts];
  const [showContacts, setShowContacts] = useState(theContacts.splice(0, 5));
  const [restOfContacts, setRestOfContacts] = useState(theContacts);

  const getRandomContact = () => {
    let contactIndex = Math.floor(Math.random() * restOfContacts.length);
    let copyContacts = [...showContacts];
    let copyRestOfContacts = [...restOfContacts];
    copyRestOfContacts.splice(contactIndex, 1);
    copyContacts.push(restOfContacts[contactIndex]);
    setShowContacts(copyContacts);
    setRestOfContacts(copyRestOfContacts);
  };

  const sortName = () => {
    setShowContacts([
      ...showContacts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      }),
    ]);
  };

  const sortPopularity = () => {
    setShowContacts([
      ...showContacts.sort((a, b) => {
        return b.popularity - a.popularity;
      }),
    ]);
  };

  console.log(showContacts, restOfContacts);
  return (
    <div className="App">
      <button onClick={getRandomContact}>Add Random Contact</button>
      <button onClick={sortName}>Name</button>
      <button onClick={sortPopularity}>Popularity</button>
      <button>Delete</button>
      <table>
        <thread>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
          </tr>
        </thread>
        <tbody>
          {showContacts.map((eachContact) => {
            return (
              <tr>
                <td>
                  <img src={eachContact.pictureUrl} />
                </td>
                <td>{eachContact.name}</td>
                <td>{eachContact.popularity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
