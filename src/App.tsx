import './App.css';
import Footer from './Footer';
import data from './data.json';
import Contacts from './Contacts/Contacts';

const App = () => (
  <div className="App">
    <h1>Hello world</h1>
    <Contacts
      name={data.name}
      biography={data.biography}
      contacts={data.contacts}
    />
    <Footer copyright={data.copyright} />
  </div>
)

export default App;
