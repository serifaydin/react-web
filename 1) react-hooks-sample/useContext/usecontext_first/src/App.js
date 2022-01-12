import React, { useState } from 'react';
import "./styles.css";
import UserList from './UserList';
import { UserContext } from './Contexts/UserContext';

const data = [
  { id: 1, name: "Ahmet", email: "ahmet@ahmet.com", age: 25, color: "lightcyan" },
  { id: 2, name: "Mehmet", email: "mehmet@mehmet.com", age: 26, color: "honeydew" },
  { id: 3, name: "Ali", email: "ali@ali.com", age: 27, color: "mistyrose" }
];

const App = () => {
  const [users, setUser] = useState(data);

  const changeColor = (id, color) => {
    setUser(
      users.map(user => (user.id === id ? { ...user, color: color } : user))
    )
  }

  //UserContext Provider tanımlaması yapılmıştır.
  //Consumerlar için kullanılacak State ve Functionlar belirtilmiştir.
  return (
    <UserContext.Provider value={{users,changeColor}}>
      <div className="App">
        <header>
          <h1>Welcome</h1>
        </header>
        <UserList />
      </div>
    </UserContext.Provider>
  );
}

export default App;