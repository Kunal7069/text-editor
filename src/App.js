import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
 <Navbar title="Textutils"/>
 {/* <Alert alert="ARE YOU SURE?"/> */}
 <div className="container">
 <TextForm />
 {/* <About/> */}
 </div>
 
    </>
  );
}

export default App;
