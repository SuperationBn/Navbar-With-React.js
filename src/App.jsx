import { useState } from 'react';
import './App.css';

function App() {

	const [isActive, setIsActive] = useState(false);
  
  const ToggleClass = () => {
    return setIsActive(!isActive)
  };

	return (
		<header className="header">
      <div className="navbar">
        <a href="#" className="logo">SuperationBn</a>
        <nav className={isActive ? 'active' : null} id="menu">
          <a href="#" className="links">Home</a>
          <a href="#" className="links">Services</a>
          <a href="#" className="links">Products</a>
          <a href="#" className="links">Contacts</a>
        </nav>
        <button className='btn' onClick={ToggleClass}>
          <i className={`icons fa-solid ${isActive ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>
    </header>
	);
}

export default App;
