import './App.css';
import { useState } from 'react';
import Theme from './Components/Theme';
import Header from './Components/Header';



function App() {
  const [ darktheme, setDarktheme]= useState(false)

  return (
    <div className="App">
  <Header theme={darktheme} setDarktheme={setDarktheme}/>
  <Theme theme={darktheme}/>

    </div>
  );
}

export default App;