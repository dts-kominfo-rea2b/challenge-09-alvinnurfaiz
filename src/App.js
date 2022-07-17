import './App.css';
import Header from './components/Header.js'
import Contact from './components/Contact.js'

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <div className="contact-container">
        {
          contacts.map( item => {
            return <Contact key={item.name} data={item}/>
          })
        }
        </div>
      </div>
    </div>
  );
}

export default App;
