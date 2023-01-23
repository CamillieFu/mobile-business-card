import './assets/style.css';
import About from "./components/About"
import Footer from "./components/Footer"
import Info from "./components/Info"
import React from 'react';

function App() {
  const [ darkMode, setDarkMode ] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="App">
        <Info darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <About darkMode={darkMode} />
        <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
