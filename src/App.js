import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './Components/Navbar/NavbarComp';
import FormComp from './Components/Form/FormComp';
import CardsComp from './Components/Card/CardComp';

function App() {
  return (
    <div className="App">
      <NavbarComp/>

      <div className='row'>
        <div className='col-md-6'>
        <FormComp/>
        </div>
        <div className='col-md-6'>
          <CardsComp/>
        </div>
      </div>
      
    </div>
  );
}
export default App;