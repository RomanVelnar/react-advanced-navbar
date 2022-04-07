import './App.css';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import DropDownMenu from './components/DropDownMenu';

function App() {
  return (
    <div className="App">
        <Navbar>
          <NavItem>Home</NavItem>
          <NavItem>About us</NavItem>
          <NavItem>Services</NavItem>
          <NavItem icon="🧐">
            <DropDownMenu></DropDownMenu>
          </NavItem>
        </Navbar>
    </div>
  );
}

export default App;
