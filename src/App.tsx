import './App.css';
import Footer from './Footer/Footer';
import data from './data.json';
import Contacts from './Contacts/Contacts';
import { useState } from 'react';
import GameShip from './Game-ship/game-ship';

const App = () => {
  const [state, setState] = useState({ isAdmin: false, userName: 'John' });
  const { isAdmin } = state;
  const assignAdmin = () => {
    setState({ ...state, isAdmin: true });
  };

  return (
    <div className="App">
      <h1>Hello user, you is {isAdmin ? 'Super Admin' : 'a user'}</h1>
      <button onClick={assignAdmin}>Assign admin</button>
      <Contacts
        name={data.name}
        biography={data.biography}
        contacts={data.contacts}
      />
      <GameShip />
      <Footer copyright={data.copyright} />
    </div>
  );
};

export default App;
