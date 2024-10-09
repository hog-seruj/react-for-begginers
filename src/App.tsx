import './App.css';
import Footer from './Footer';

const data = {
  copyright: 'Copyright',
}

const App = () => (
  <div className="App">
    <h1>Hello world</h1>
    <Footer copyright={data.copyright} />
  </div>
)

export default App;
