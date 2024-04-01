import logo from './logo.svg';
import './App.css';

// 1. import {SomeNamedImport } from somelocation/somelibrary;
import { BComp2 } from './components/BComp2';

// 2. import someDefaultImport from somelocation/somelibrary
import AComp1 from './components/AComp1';

function App() {
  return (
    <div className="App">
      <AComp1 surname = "Kumar" />
      <AComp1 surname = "Singh" />
      <BComp2 surname= "Rathor" />
    </div>
  );
}

export default App;
