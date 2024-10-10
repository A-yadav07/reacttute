import './App.css';
import CustomInput from './components/Custominput';
import Custombutton from './components/Custombutton';
import { useState } from 'react';

function App() {

  const [name, setName] = useState();

  const handleOnchange = (event) =>
  {
    setName(event.target.value);
    console.log(name);
  }

  return (
    <div className='containermain'>
      <div  className='container' >
        <h2>Application Form</h2>
        <CustomInput name={"Name"} onChange={handleOnchange}  />
        <CustomInput name={"Father Name"}/>
        <CustomInput name={"Mother Name"}/>
        <CustomInput name={"Contact Number"}/>
        <CustomInput name={"Comment"}/>
        <Custombutton name={"Submit"}/>
      </div>

      <div>{name}</div>
    </div>

  );
}

export default App;
