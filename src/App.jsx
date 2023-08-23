import "./App.css";
import { useState } from 'react'; 
import allContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));

  const handleAddContact = () => {
  console.log("Añadiendo nuevo actor")
  let randomNumber = Math.random() * allContacts.length
  let randomIndex = Math.floor(randomNumber)
  let randomContact = allContacts[randomIndex]

  let clone = JSON.parse(JSON.stringify(contacts))
  clone.unshift(randomContact)

  setContacts(clone)
  }


  const handleSortContacts = (porTipo) => {
  console.log("intentando ordenar")
  
  let clone = JSON.parse(JSON.stringify(contacts))
  
  clone.sort((cont1, cont2) => {
    if (porTipo === "name")
    {return cont1.name > cont2.name ? 1 : -1}
    else if (porTipo === "popularity") {
      return cont1.popularity > cont2.popularity ? -1 : 1
    }
  })
  setContacts(clone)
  }

  
  const handleDeteleContact = (index) => {
  console.log("intentando borrar", index)
  let clone = JSON.parse(JSON.stringify(contacts))
  clone.splice(index, 1)

  setContacts(clone)

  }

  return (
    <div className="App">
      <h1>ContactList</h1>
      
      <button onClick={handleAddContact}>Add random contact</button>
      <button onClick={() => handleSortContacts("name")}>Sort by name</button>
      <button onClick={() => handleSortContacts("popularity")}>Sort by popularity</button>

      <table>
        <thead>
          <tr>
            <th style={{ padding: "10px", textAlign: "center"}}>Picture</th>
            <th style={{ padding: "10px", textAlign: "center"}}>Name</th>
            <th style={{ padding: "10px", textAlign: "center" }}>Popularity</th>
            <th style={{ padding: "10px", textAlign: "center" }}>Won Oscar</th>
            <th style={{ padding: "10px", textAlign: "center" }}>Won Emmy</th>
            <th style={{ padding: "10px", textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((eachContact, i) => (
            <tr key={eachContact.id} >
              <td style={{ padding: "10px", textAlign: "center" }}><img src={eachContact.pictureUrl} width="100px" /></td>
              <td style={{ padding: "10px", textAlign: "center" }}>{eachContact.name}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{eachContact.popularity}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{eachContact.wonOscar === true ? "🏆" : null}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{eachContact.wonEmmy === true ? "🌟" : null}</td>
              <button style={{ padding: "10px", textAlign: "center", marginTop: "68px" }} onClick={() => handleDeteleContact(i)}>Borrar</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;